#include "tree_sitter/parser.h"

#include <wctype.h>

enum TokenType {
  COMMENT,
  STATEMENT_SEP,
  INTEGER,
  REAL
};

static bool scan_comment(TSLexer *lexer) {
  int depth = 1;

  while (!lexer->eof(lexer)) {
    switch (lexer->lookahead) {
      case '*':
        lexer->advance(lexer, false);
        if (lexer->lookahead == ')') {
          depth--;
          if (depth == 0) {
            lexer->result_symbol = COMMENT;
            lexer->advance(lexer, false);
            lexer->mark_end(lexer);
            return true;
          }
        }
        break;

      case '(':
        lexer->advance(lexer, false);
        if (lexer->lookahead == '*') {
          depth++;
        }
        break;

      default:
        lexer->advance(lexer, false);
        break;
    }
  }

  return false;
}

void *tree_sitter_wolfram_external_scanner_create(void) {
  return NULL;
}

void tree_sitter_wolfram_external_scanner_destroy(void *payload) {
}

unsigned tree_sitter_wolfram_external_scanner_serialize(void *payload, char *buffer) {
  return 0;
}

void tree_sitter_wolfram_external_scanner_deserialize(void *payload, const char *buffer, unsigned length) {
}

static inline bool is_digit(int32_t c) {
  return c >= '0' && c <= '9';
}

bool tree_sitter_wolfram_external_scanner_scan(void *payload, TSLexer *lexer, const bool *valid_symbols) {
  // Skip horizontal whitespace, but stop at a newline. A newline at a position
  // where a statement separator is valid (i.e. between complete top-level
  // expressions) is significant: it splits statements rather than acting as the
  // whitespace glue that would otherwise form an implicit_times. Inside brackets
  // STATEMENT_SEP is never valid, so newlines there remain insignificant.
  while (lexer->lookahead == ' ' || lexer->lookahead == '\t' ||
         lexer->lookahead == '\r' || lexer->lookahead == '\f' ||
         lexer->lookahead == '\v') {
    lexer->advance(lexer, true);
  }

  if (valid_symbols[STATEMENT_SEP] && lexer->lookahead == '\n') {
    while (iswspace(lexer->lookahead)) {
      lexer->advance(lexer, false);
    }
    lexer->result_symbol = STATEMENT_SEP;
    lexer->mark_end(lexer);
    return true;
  }

  // Newline is not significant here (mid-expression, or inside brackets): treat
  // all remaining whitespace as ordinary extras before checking for a number or
  // a comment.
  while (iswspace(lexer->lookahead)) {
    lexer->advance(lexer, true);
  }

  // A number whose digits end immediately before `..` takes no trailing dot:
  // the `..` is Repeated (or the start of `...`, RepeatedNull). The internal
  // lexer cannot see past the dot, so without this it reads `2..` as the real
  // `2.` followed by a Dot. A trailing dot can follow the leading digits
  // (`2..`) or the digits of a precision or accuracy mark (`2`3..`, `2.5``3..`).
  // Each candidate end is pinned with mark_end before reading on to the dots.
  // Every other number returns false and goes to the internal lexer. The token
  // type matches what the internal lexer would give the same characters.
  if ((valid_symbols[INTEGER] || valid_symbols[REAL]) && is_digit(lexer->lookahead)) {
    enum TokenType symbol = INTEGER;

    while (is_digit(lexer->lookahead)) {
      lexer->advance(lexer, false);
    }

    if (lexer->lookahead == '.') {
      lexer->mark_end(lexer);
      lexer->advance(lexer, false);
      if (lexer->lookahead == '.') {
        lexer->result_symbol = INTEGER;
        return valid_symbols[INTEGER];
      }
      symbol = REAL;
      while (is_digit(lexer->lookahead)) {
        lexer->advance(lexer, false);
      }
    }

    if (lexer->lookahead != '`') return false;
    lexer->advance(lexer, false);
    if (lexer->lookahead == '`') lexer->advance(lexer, false);
    while (is_digit(lexer->lookahead)) {
      lexer->advance(lexer, false);
    }

    if (lexer->lookahead != '.') return false;
    lexer->mark_end(lexer);
    lexer->advance(lexer, false);
    if (lexer->lookahead != '.') return false;

    lexer->result_symbol = symbol;
    return valid_symbols[symbol];
  }

  if (lexer->lookahead == '(') {
    lexer->advance(lexer, false);
    if (lexer->lookahead == '*') {
      lexer->advance(lexer, false);
      return scan_comment(lexer);
    }
  }

  return false;
}
