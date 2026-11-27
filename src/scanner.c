#include "tree_sitter/parser.h"

#include <wctype.h>

enum TokenType {
  COMMENT,
  STATEMENT_SEP,
  INTEGER
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

  // A digit run immediately followed by `..` is an integer with Repeated
  // applied, not a trailing-dot real followed by a Dot. mark_end pins the token
  // at the last digit while we read on to decide.
  if (valid_symbols[INTEGER] && is_digit(lexer->lookahead)) {
    while (is_digit(lexer->lookahead)) {
      lexer->advance(lexer, false);
    }
    lexer->mark_end(lexer);

    if (lexer->lookahead != '.') return false;
    lexer->advance(lexer, false);
    if (lexer->lookahead != '.') return false;

    lexer->result_symbol = INTEGER;
    return true;
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
