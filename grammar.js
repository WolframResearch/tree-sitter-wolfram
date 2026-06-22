((PRECEDENCE_LOWEST = 0), // prec: 0, assoc: Associativity`NonRight
  (PRECEDENCE_COMMA = 2), // prec: 1, assoc: Associativity`NonRight
  (PRECEDENCE_LONGNAME_INVISIBLECOMMA = 2), // prec: 1, assoc: Associativity`NonRight
  (PRECEDENCE_SEMI = 4), // prec: 2, assoc: Associativity`NonRight
  (PRECEDENCE_GREATERGREATER = 6), // prec: 3, assoc: Associativity`NonRight
  (PRECEDENCE_GREATERGREATERGREATER = 6), // prec: 3, assoc: Associativity`NonRight
  (PRECEDENCE_EQUAL = 9), // prec: 4, assoc: Associativity`Right
  (PRECEDENCE_COLONEQUAL = 9), // prec: 4, assoc: Associativity`Right
  (PRECEDENCE_CARETEQUAL = 9), // prec: 4, assoc: Associativity`Right
  (PRECEDENCE_CARETCOLONEQUAL = 9), // prec: 4, assoc: Associativity`Right
  (PRECEDENCE_LONGNAME_FUNCTION = 9), // prec: 4, assoc: Associativity`Right
  (PRECEDENCE_FAKE_EQUALDOT = 9), // prec: 4, assoc: Associativity`Right
  (PRECEDENCE_BARMINUSGREATER = 9), // prec: 4, assoc: Associativity`Right
  (PRECEDENCE_SLASHCOLON = 11), // prec: 5, assoc: Associativity`Right
  (PRECEDENCE_LONGNAME_BECAUSE = 12), // prec: 6, assoc: Associativity`NonRight
  (PRECEDENCE_LONGNAME_THEREFORE = 15), // prec: 7, assoc: Associativity`Right
  (PRECEDENCE_LONGNAME_VERTICALSEPARATOR = 16), // prec: 8, assoc: Associativity`NonRight
  (PRECEDENCE_SLASHSLASH = 18), // prec: 9, assoc: Associativity`NonRight
  (PRECEDENCE_SLASHSLASHEQUAL = 21), // prec: 10, assoc: Associativity`Right
  (PRECEDENCE_LONGNAME_COLON = 22), // prec: 11, assoc: Associativity`NonRight
  (PRECEDENCE_AMP = 24), // prec: 12, assoc: Associativity`NonRight
  (PRECEDENCE_PLUSEQUAL = 27), // prec: 13, assoc: Associativity`Right
  (PRECEDENCE_STAREQUAL = 27), // prec: 13, assoc: Associativity`Right
  (PRECEDENCE_MINUSEQUAL = 27), // prec: 13, assoc: Associativity`Right
  (PRECEDENCE_SLASHEQUAL = 27), // prec: 13, assoc: Associativity`Right
  (PRECEDENCE_SLASHDOT = 28), // prec: 14, assoc: Associativity`NonRight
  (PRECEDENCE_SLASHSLASHDOT = 28), // prec: 14, assoc: Associativity`NonRight
  (PRECEDENCE_MINUSGREATER = 31), // prec: 15, assoc: Associativity`Right
  (PRECEDENCE_COLONGREATER = 31), // prec: 15, assoc: Associativity`Right
  (PRECEDENCE_LONGNAME_RULE = 31), // prec: 15, assoc: Associativity`Right
  (PRECEDENCE_LONGNAME_RULEDELAYED = 31), // prec: 15, assoc: Associativity`Right
  (PRECEDENCE_LESSMINUSGREATER = 33), // prec: 16, assoc: Associativity`Right
  (PRECEDENCE_LONGNAME_TWOWAYRULE = 33), // prec: 16, assoc: Associativity`Right
  (PRECEDENCE_SLASHSEMI = 34), // prec: 17, assoc: Associativity`NonRight
  (PRECEDENCE_TILDETILDE = 36), // prec: 18, assoc: Associativity`NonRight
  (PRECEDENCE_FAKE_OPTIONALCOLON = 38), // prec: 19, assoc: Associativity`NonRight
  (PRECEDENCE_FAKE_PATTERNCOLON = 40), // prec: 20, assoc: Associativity`NonRight
  (PRECEDENCE_BAR = 42), // prec: 21, assoc: Associativity`NonRight
  (PRECEDENCE_DOTDOT = 44), // prec: 22, assoc: Associativity`NonRight
  (PRECEDENCE_DOTDOTDOT = 44), // prec: 22, assoc: Associativity`NonRight
  (PRECEDENCE_LONGNAME_SUCHTHAT = 47), // prec: 23, assoc: Associativity`Right
  (PRECEDENCE_LONGNAME_UPTEE = 48), // prec: 24, assoc: Associativity`NonRight
  (PRECEDENCE_LONGNAME_DOWNTEE = 48), // prec: 24, assoc: Associativity`NonRight
  (PRECEDENCE_LONGNAME_LEFTTEE = 48), // prec: 24, assoc: Associativity`NonRight
  (PRECEDENCE_LONGNAME_DOUBLELEFTTEE = 48), // prec: 24, assoc: Associativity`NonRight
  (PRECEDENCE_LONGNAME_PERPENDICULAR = 48), // prec: 24, assoc: Associativity`NonRight
  (PRECEDENCE_LONGNAME_RIGHTTEE = 51), // prec: 25, assoc: Associativity`Right
  (PRECEDENCE_LONGNAME_DOUBLERIGHTTEE = 51), // prec: 25, assoc: Associativity`Right
  (PRECEDENCE_LONGNAME_CONDITIONED = 52), // prec: 26, assoc: Associativity`NonRight
  (PRECEDENCE_LONGNAME_IMPLIES = 55), // prec: 27, assoc: Associativity`Right
  (PRECEDENCE_LONGNAME_ROUNDIMPLIES = 55), // prec: 27, assoc: Associativity`Right
  (PRECEDENCE_LONGNAME_EQUIVALENT = 56), // prec: 28, assoc: Associativity`NonRight
  (PRECEDENCE_BARBAR = 58), // prec: 29, assoc: Associativity`NonRight
  (PRECEDENCE_LONGNAME_OR = 58), // prec: 29, assoc: Associativity`NonRight
  (PRECEDENCE_LONGNAME_NOR = 58), // prec: 29, assoc: Associativity`NonRight
  (PRECEDENCE_LONGNAME_XOR = 60), // prec: 30, assoc: Associativity`NonRight
  (PRECEDENCE_LONGNAME_XNOR = 60), // prec: 30, assoc: Associativity`NonRight
  (PRECEDENCE_AMPAMP = 62), // prec: 31, assoc: Associativity`NonRight
  (PRECEDENCE_LONGNAME_AND = 62), // prec: 31, assoc: Associativity`NonRight
  (PRECEDENCE_LONGNAME_NAND = 62), // prec: 31, assoc: Associativity`NonRight
  (PRECEDENCE_PREFIX_BANG = 64), // prec: 32, assoc: Associativity`NonRight
  (PRECEDENCE_LONGNAME_NOT = 64), // prec: 32, assoc: Associativity`NonRight
  (PRECEDENCE_FAKE_PREFIX_BANGBANG = 64), // prec: 32, assoc: Associativity`NonRight
  (PRECEDENCE_LONGNAME_FORALL = 66), // prec: 33, assoc: Associativity`NonRight
  (PRECEDENCE_LONGNAME_EXISTS = 66), // prec: 33, assoc: Associativity`NonRight
  (PRECEDENCE_LONGNAME_NOTEXISTS = 66), // prec: 33, assoc: Associativity`NonRight
  (PRECEDENCE_CLASS_SETRELATIONS = 68), // prec: 34, assoc: Associativity`NonRight
  (PRECEDENCE_EQUALEQUALEQUAL = 70), // prec: 35, assoc: Associativity`NonRight
  (PRECEDENCE_EQUALBANGEQUAL = 70), // prec: 35, assoc: Associativity`NonRight
  (PRECEDENCE_CLASS_HORIZONTALARROWS = 72), // prec: 36, assoc: Associativity`NonRight
  (PRECEDENCE_CLASS_VECTOROPERATORS = 72), // prec: 36, assoc: Associativity`NonRight
  (PRECEDENCE_CLASS_DIAGONALARROWOPERATORS = 72), // prec: 36, assoc: Associativity`NonRight
  (PRECEDENCE_LONGNAME_VERTICALBAR = 74), // prec: 37, assoc: Associativity`NonRight
  (PRECEDENCE_LONGNAME_NOTVERTICALBAR = 74), // prec: 37, assoc: Associativity`NonRight
  (PRECEDENCE_LONGNAME_DOUBLEVERTICALBAR = 74), // prec: 37, assoc: Associativity`NonRight
  (PRECEDENCE_LONGNAME_NOTDOUBLEVERTICALBAR = 74), // prec: 37, assoc: Associativity`NonRight
  (PRECEDENCE_CLASS_ORDERINGOPERATORS = 76), // prec: 38, assoc: Associativity`NonRight
  (PRECEDENCE_CLASS_INEQUALITY = 76), // prec: 38, assoc: Associativity`NonRight
  (PRECEDENCE_LONGNAME_DIRECTEDEDGE = 79), // prec: 39, assoc: Associativity`Right
  (PRECEDENCE_LONGNAME_UNDIRECTEDEDGE = 79), // prec: 39, assoc: Associativity`Right
  (PRECEDENCE_SEMISEMI = 80), // prec: 40, assoc: Associativity`NonRight
  (PRECEDENCE_CLASS_UNIONOPERATORS = 82), // prec: 41, assoc: Associativity`NonRight
  (PRECEDENCE_CLASS_INTERSECTIONOPERATORS = 84), // prec: 42, assoc: Associativity`NonRight
  (PRECEDENCE_INFIX_PLUS = 86), // prec: 43, assoc: Associativity`NonRight
  (PRECEDENCE_INFIX_MINUS = 86), // prec: 43, assoc: Associativity`NonRight
  (PRECEDENCE_INFIX_LONGNAME_PLUSMINUS = 86), // prec: 43, assoc: Associativity`NonRight
  (PRECEDENCE_INFIX_LONGNAME_MINUSPLUS = 86), // prec: 43, assoc: Associativity`NonRight
  (PRECEDENCE_INFIX_LONGNAME_MINUS = 86), // prec: 43, assoc: Associativity`NonRight
  (PRECEDENCE_LONGNAME_IMPLICITPLUS = 88), // prec: 44, assoc: Associativity`NonRight
  (PRECEDENCE_LONGNAME_SUM = 90), // prec: 45, assoc: Associativity`NonRight
  (PRECEDENCE_CLASS_INTEGRATIONOPERATORS = 92), // prec: 46, assoc: Associativity`NonRight
  (PRECEDENCE_LONGNAME_EXPECTATIONE = 92), // prec: 46, assoc: Associativity`NonRight
  (PRECEDENCE_LONGNAME_PROBABILITYPR = 92), // prec: 46, assoc: Associativity`NonRight
  (PRECEDENCE_LONGNAME_CIRCLEPLUS = 94), // prec: 47, assoc: Associativity`NonRight
  (PRECEDENCE_LONGNAME_CIRCLEMINUS = 94), // prec: 47, assoc: Associativity`NonRight
  (PRECEDENCE_LONGNAME_CUP = 96), // prec: 48, assoc: Associativity`NonRight
  (PRECEDENCE_LONGNAME_CAP = 98), // prec: 49, assoc: Associativity`NonRight
  (PRECEDENCE_INFIX_LONGNAME_COPRODUCT = 100), // prec: 50, assoc: Associativity`NonRight
  (PRECEDENCE_LONGNAME_VERTICALTILDE = 102), // prec: 51, assoc: Associativity`NonRight
  (PRECEDENCE_LONGNAME_PRODUCT = 104), // prec: 52, assoc: Associativity`NonRight
  (PRECEDENCE_LONGNAME_CONTINUEDFRACTIONK = 104), // prec: 52, assoc: Associativity`NonRight
  (PRECEDENCE_LONGNAME_STAR = 106), // prec: 53, assoc: Associativity`NonRight
  (PRECEDENCE_STAR = 108), // prec: 54, assoc: Associativity`NonRight
  (PRECEDENCE_LONGNAME_TIMES = 108), // prec: 54, assoc: Associativity`NonRight
  (PRECEDENCE_LONGNAME_INVISIBLETIMES = 108), // prec: 54, assoc: Associativity`NonRight
  (PRECEDENCE_FAKE_IMPLICITTIMES = 108), // prec: 54, assoc: Associativity`NonRight
  (PRECEDENCE_LONGNAME_CENTERDOT = 110), // prec: 55, assoc: Associativity`NonRight
  (PRECEDENCE_INFIX_LONGNAME_CIRCLETIMES = 112), // prec: 56, assoc: Associativity`NonRight
  (PRECEDENCE_LONGNAME_VEE = 114), // prec: 57, assoc: Associativity`NonRight
  (PRECEDENCE_LONGNAME_WEDGE = 116), // prec: 58, assoc: Associativity`NonRight
  (PRECEDENCE_LONGNAME_DIAMOND = 118), // prec: 59, assoc: Associativity`NonRight
  (PRECEDENCE_LONGNAME_BACKSLASH = 120), // prec: 60, assoc: Associativity`NonRight
  (PRECEDENCE_SLASH = 122), // prec: 61, assoc: Associativity`NonRight
  (PRECEDENCE_LONGNAME_DIVIDE = 122), // prec: 61, assoc: Associativity`NonRight
  (PRECEDENCE_LONGNAME_DIVIDES = 122), // prec: 61, assoc: Associativity`NonRight
  (PRECEDENCE_LONGNAME_DIVISIONSLASH = 122), // prec: 61, assoc: Associativity`NonRight
  (PRECEDENCE_PREFIX_MINUS = 124), // prec: 62, assoc: Associativity`NonRight
  (PRECEDENCE_PREFIX_PLUS = 124), // prec: 62, assoc: Associativity`NonRight
  (PRECEDENCE_PREFIX_LONGNAME_PLUSMINUS = 124), // prec: 62, assoc: Associativity`NonRight
  (PRECEDENCE_PREFIX_LONGNAME_MINUSPLUS = 124), // prec: 62, assoc: Associativity`NonRight
  (PRECEDENCE_PREFIX_LONGNAME_MINUS = 124), // prec: 62, assoc: Associativity`NonRight
  (PRECEDENCE_PREFIX_LONGNAME_CIRCLETIMES = 124), // prec: 62, assoc: Associativity`NonRight
  (PRECEDENCE_PREFIX_LONGNAME_COPRODUCT = 124), // prec: 62, assoc: Associativity`NonRight
  (PRECEDENCE_DOT = 126), // prec: 63, assoc: Associativity`NonRight
  (PRECEDENCE_LONGNAME_TENSORPRODUCT = 128), // prec: 64, assoc: Associativity`NonRight
  (PRECEDENCE_LONGNAME_CROSS = 130), // prec: 65, assoc: Associativity`NonRight
  (PRECEDENCE_LONGNAME_TENSORWEDGE = 130), // prec: 65, assoc: Associativity`NonRight
  (PRECEDENCE_STARSTAR = 132), // prec: 66, assoc: Associativity`NonRight
  (PRECEDENCE_LONGNAME_CIRCLEDOT = 134), // prec: 67, assoc: Associativity`NonRight
  (PRECEDENCE_LONGNAME_PERMUTATIONPRODUCT = 134), // prec: 67, assoc: Associativity`NonRight
  (PRECEDENCE_LONGNAME_SMALLCIRCLE = 136), // prec: 68, assoc: Associativity`NonRight
  (PRECEDENCE_LONGNAME_SQUARE = 138), // prec: 69, assoc: Associativity`NonRight
  (PRECEDENCE_LONGNAME_DEL = 140), // prec: 70, assoc: Associativity`NonRight
  (PRECEDENCE_LONGNAME_PIECEWISE = 142), // prec: 71, assoc: Associativity`NonRight
  (PRECEDENCE_LONGNAME_DIFFERENTIALD = 144), // prec: 72, assoc: Associativity`NonRight
  (PRECEDENCE_LONGNAME_CAPITALDIFFERENTIALD = 144), // prec: 72, assoc: Associativity`NonRight
  (PRECEDENCE_LONGNAME_SQRT = 146), // prec: 73, assoc: Associativity`NonRight
  (PRECEDENCE_LONGNAME_CUBEROOT = 146), // prec: 73, assoc: Associativity`NonRight
  (PRECEDENCE_CLASS_VERTICALARROWOPERATORS = 148), // prec: 74, assoc: Associativity`NonRight
  (PRECEDENCE_CLASS_VERTICALVECTOROPERATORS = 148), // prec: 74, assoc: Associativity`NonRight
  (PRECEDENCE_CARET = 151), // prec: 75, assoc: Associativity`Right
  (PRECEDENCE_LESSGREATER = 152), // prec: 76, assoc: Associativity`NonRight
  (PRECEDENCE_SINGLEQUOTE = 154), // prec: 77, assoc: Associativity`NonRight
  (PRECEDENCE_LONGNAME_TRANSPOSE = 156), // prec: 78, assoc: Associativity`NonRight
  (PRECEDENCE_LONGNAME_CONJUGATE = 156), // prec: 78, assoc: Associativity`NonRight
  (PRECEDENCE_LONGNAME_CONJUGATETRANSPOSE = 156), // prec: 78, assoc: Associativity`NonRight
  (PRECEDENCE_LONGNAME_HERMITIANCONJUGATE = 156), // prec: 78, assoc: Associativity`NonRight
  (PRECEDENCE_POSTFIX_BANG = 158), // prec: 79, assoc: Associativity`NonRight
  (PRECEDENCE_POSTFIX_BANGBANG = 158), // prec: 79, assoc: Associativity`NonRight
  (PRECEDENCE_ATAT = 161), // prec: 80, assoc: Associativity`Right
  (PRECEDENCE_SLASHAT = 161), // prec: 80, assoc: Associativity`Right
  (PRECEDENCE_ATATAT = 161), // prec: 80, assoc: Associativity`Right
  (PRECEDENCE_SLASHSLASHAT = 161), // prec: 80, assoc: Associativity`Right
  (PRECEDENCE_TILDE = 162), // prec: 81, assoc: Associativity`NonRight
  (PRECEDENCE_AT = 165), // prec: 82, assoc: Associativity`Right
  (PRECEDENCE_LONGNAME_INVISIBLEAPPLICATION = 165), // prec: 82, assoc: Associativity`Right
  (PRECEDENCE_LONGNAME_APPLICATION = 166), // prec: 83, assoc: Associativity`NonRight
  (PRECEDENCE_SLASHSTAR = 168), // prec: 84, assoc: Associativity`NonRight
  (PRECEDENCE_ATSTAR = 170), // prec: 85, assoc: Associativity`NonRight
  (PRECEDENCE_PREFIX_PLUSPLUS = 172), // prec: 86, assoc: Associativity`NonRight
  (PRECEDENCE_PREFIX_MINUSMINUS = 172), // prec: 86, assoc: Associativity`NonRight
  (PRECEDENCE_POSTFIX_PLUSPLUS = 174), // prec: 87, assoc: Associativity`NonRight
  (PRECEDENCE_POSTFIX_MINUSMINUS = 174), // prec: 87, assoc: Associativity`NonRight
  (PRECEDENCE_CALL = 176), // prec: 88, assoc: Associativity`NonRight
  (PRECEDENCE_INFIX_QUESTION = 178), // prec: 89, assoc: Associativity`NonRight
  (PRECEDENCE_LINEARSYNTAX_BANG = 180), // prec: 90, assoc: Associativity`NonRight
  (PRECEDENCE_LESSLESS = 182), // prec: 91, assoc: Associativity`NonRight
  (PRECEDENCE_COLONCOLON = 184), // prec: 92, assoc: Associativity`NonRight
  (PRECEDENCE_LONGNAME_INVISIBLEPREFIXSCRIPTBASE = 186), // prec: 93, assoc: Associativity`NonRight
  (PRECEDENCE_LONGNAME_INVISIBLEPOSTFIXSCRIPTBASE = 186), // prec: 93, assoc: Associativity`NonRight
  (PRECEDENCE_HIGHEST = 188), // prec: 94, assoc: Associativity`NonRight
  (PRECEDENCE_SYMBOL = 188), // prec: 94, assoc: Associativity`NonRight
  (PRECEDENCE_UNDER = 188), // prec: 94, assoc: Associativity`NonRight
  (PRECEDENCE_ASSERTFALSE = 190), // prec: 95, assoc: Associativity`NonRight
  // Base pattern for a symbol name segment (no context backticks)
  (SYMBOL_NAME = /[$a-zA-Z][$a-zA-Z0-9]*/),

  (module.exports = grammar({
    name: "wolfram",

    extras: ($) => [$.comment, /\s/],

    externals: ($) => [$.comment],

    // implicit_times (expr expr) creates GLR ambiguity with certain operator
    // combinations. Only the conflict sets tree-sitter actually needs are listed.
    conflicts: ($) => [
      [$.implicit_times, $.prefix, $.call],
      [$.implicit_times, $.prefix, $.postfix],
      [$.implicit_times, $.prefix, $.infix, $.call],
      [$.implicit_times, $.prefix, $.postfix, $.infix],
      [$.implicit_times, $.binary, $.call],
      [$.implicit_times, $.postfix, $.binary],
      [$.implicit_times, $.infix, $.call],
      [$.implicit_times, $.postfix, $.infix],
      [$.implicit_times, $.call, $.tilde],
      [$.implicit_times, $.postfix, $.tilde],
      [$.span],
    ],

    rules: {
      source_file: ($) => repeat($._expression),

      _expression: ($) =>
        choice(
          $._non_prefix_expression,
          $.prefix,
        ),

      // Expressions that don't start with a prefix operator.
      // Used as the RHS of implicit_times: between two complete expressions,
      // tokens like + - are always infix, and ! ++ -- are always postfix on the LHS.
      _non_prefix_expression: ($) =>
        choice(
          $._leaf,
          $.postfix,
          $.binary,
          $.infix,
          $.call,
          $.part,
          $.span,
          $.pattern,
          $.message_name,
          $.type_specifier,
          $.implicit_times,
          $.freeform_evaluate,
          $.group,
          $.message_name,
          $.tilde,
        ),

      _leaf: ($) => choice($.symbol, $.integer, $.real, $.string, $.slot, $.slot_sequence, $.blank, $.blank_default, $.blank_sequence, $.blank_null_sequence, $.named_character, $.out),

      symbol: ($) => token(seq(optional("`"), repeat(seq(SYMBOL_NAME, "`")), SYMBOL_NAME)),

      integer: ($) => /([0-9]+\^\^[0-9a-zA-Z]+|[0-9]+)`{0,2}[0-9]*(\*\^-?[0-9]+)?/,

      real: ($) => /(([0-9]+\^\^)([0-9a-zA-Z]+\.[0-9a-zA-Z]*|\.[0-9a-zA-Z]+)|[0-9]+\.[0-9]*|\.[0-9]+)`{0,2}[0-9]*(\*\^-?[0-9]+)?/,

      string: ($) => /\"([^\"\\]|\\(.|\n))*\"/,

      // ## or ##n — SlotSequence
      slot_sequence: ($) => token(seq("##", optional(/[0-9]+/))),

      // # or #n or #name or #"name" — Slot (n >= 0; names are valid symbol names)
      slot: ($) => token(seq("#", optional(choice(/[0-9]+/, SYMBOL_NAME, seq('"', /[^"]*/, '"'))))),

      // _ with optional head: _, _Integer
      blank: ($) =>
        prec.left(PRECEDENCE_UNDER, seq(
          "_",
          optional(token.immediate(/[a-zA-Z][a-zA-Z0-9$]*/)),
        )),

      // _. — Optional with built-in default: Optional[Blank[]]
      blank_default: ($) =>
        prec(PRECEDENCE_UNDER, seq("_", token.immediate("."))),

      // __ with optional head: __, __Integer
      blank_sequence: ($) =>
        prec.left(PRECEDENCE_UNDER, seq(
          "__",
          optional(token.immediate(/[a-zA-Z][a-zA-Z0-9$]*/)),
        )),

      // ___ with optional head: ___, ___Integer
      blank_null_sequence: ($) =>
        prec.left(PRECEDENCE_UNDER, seq(
          "___",
          optional(token.immediate(/[a-zA-Z][a-zA-Z0-9$]*/)),
        )),

      named_character: ($) => /\\\[[A-Z][a-zA-Z]*\]/,

      out: ($) => /%+[0-9]*/,

      // x_ is Pattern[x, Blank[]], x_Integer is Pattern[x, Blank[Integer]]
      pattern: ($) =>
        prec(PRECEDENCE_UNDER, seq(
          field("name", $.symbol),
          field("constraint", choice($.blank, $.blank_default, $.blank_sequence, $.blank_null_sequence)),
        )),

      // f::name is MessageName[f, "name"], f::name::lang is MessageName[f, "name", "lang"]
      // The tags after :: are unquoted strings, not symbols
      message_name: ($) =>
        prec.left(PRECEDENCE_COLONCOLON, seq(
          $._expression,
          "::",
          alias(token.immediate(SYMBOL_NAME), $.message_tag),
          optional(seq(
            token.immediate("::"),
            alias(token.immediate(SYMBOL_NAME), $.message_tag),
          )),
        )),

      // 2 x or 2x is Times[2, x] (implicit multiplication)
      // Dynamic precedence -1 ensures explicit operators (infix +, -, etc.) win
      // over "implicit_times with prefix operator" when both parses are valid.
      implicit_times: ($) =>
        prec.dynamic(-1, prec.left(PRECEDENCE_FAKE_IMPLICITTIMES, seq($._expression, $._non_prefix_expression))),

      // "Type"::["arg1", "arg2"] is TypeSpecifier["Type", "arg1", "arg2"]
      type_specifier: ($) =>
        prec.left(PRECEDENCE_COLONCOLON, seq(
          $._expression,
          "::",
          "[",
          optional(field("arguments", $._expression)),
          "]",
        )),

      // =[content] is FreeformEvaluate["content"]
      // The content between [ and ] is raw text, not parsed as expressions
      freeform_evaluate: ($) =>
        seq(
          token(seq("=", "[")),
          optional(alias(/[^\]]+/, $.freeform_content)),
          "]",
        ),

      prefix: ($) =>
        choice(
          prec(PRECEDENCE_PREFIX_BANG, seq("!", $._expression)),
          prec(PRECEDENCE_FAKE_PREFIX_BANGBANG, seq("!!", $._expression)),
          prec(PRECEDENCE_PREFIX_MINUS, seq("-", $._expression)),
          prec(PRECEDENCE_PREFIX_PLUS, seq("+", $._expression)),
          prec(PRECEDENCE_PREFIX_PLUSPLUS, seq("++", $._expression)),
          prec(PRECEDENCE_PREFIX_MINUSMINUS, seq("--", $._expression)),
          prec(PRECEDENCE_LONGNAME_NOT, seq("\\[Not]", $._expression)),
          prec(PRECEDENCE_LONGNAME_FORALL, seq("\\[ForAll]", $._expression)),
          prec(PRECEDENCE_LONGNAME_EXISTS, seq("\\[Exists]", $._expression)),
          prec(PRECEDENCE_LONGNAME_NOTEXISTS, seq("\\[NotExists]", $._expression)),
          prec(PRECEDENCE_PREFIX_LONGNAME_PLUSMINUS, seq("\\[PlusMinus]", $._expression)),
          prec(PRECEDENCE_PREFIX_LONGNAME_MINUSPLUS, seq("\\[MinusPlus]", $._expression)),
          prec(PRECEDENCE_PREFIX_LONGNAME_MINUS, seq("\\[Minus]", $._expression)),
          prec(PRECEDENCE_LONGNAME_SQRT, seq("\\[Sqrt]", $._expression)),
          prec(PRECEDENCE_LONGNAME_CUBEROOT, seq("\\[CubeRoot]", $._expression)),
          prec(PRECEDENCE_LONGNAME_DEL, seq("\\[Del]", $._expression)),
          prec(PRECEDENCE_LONGNAME_SQUARE, seq("\\[Square]", $._expression)),
          prec(PRECEDENCE_LESSLESS, seq("<<", $._expression)),
        ),

      postfix: ($) =>
        choice(
          prec(PRECEDENCE_AMP, seq($._expression, "&")),
          prec(PRECEDENCE_DOTDOT, seq($._expression, "..")),
          prec(PRECEDENCE_DOTDOTDOT, seq($._expression, "...")),
          prec(PRECEDENCE_SINGLEQUOTE, seq($._expression, "'")),
          prec(PRECEDENCE_POSTFIX_BANG, seq($._expression, "!")),
          prec(PRECEDENCE_POSTFIX_BANGBANG, seq($._expression, "!!")),
          prec(PRECEDENCE_POSTFIX_MINUSMINUS, seq($._expression, "--")),
          prec(PRECEDENCE_POSTFIX_PLUSPLUS, seq($._expression, "++")),
          prec(PRECEDENCE_FAKE_EQUALDOT, seq($._expression, "=.")),
          prec(PRECEDENCE_LONGNAME_TRANSPOSE, seq($._expression, "\\[Transpose]")),
          prec(PRECEDENCE_LONGNAME_CONJUGATE, seq($._expression, "\\[Conjugate]")),
          prec(PRECEDENCE_LONGNAME_CONJUGATETRANSPOSE, seq($._expression, "\\[ConjugateTranspose]")),
          prec(PRECEDENCE_LONGNAME_HERMITIANCONJUGATE, seq($._expression, "\\[HermitianConjugate]")),
        ),

      binary: ($) =>
        choice(
          prec.left(PRECEDENCE_EQUAL, seq($._expression, "=", $._expression)),
          prec.left(
            PRECEDENCE_COLONEQUAL,
            seq($._expression, ":=", $._expression),
          ),
          prec.left(
            PRECEDENCE_CARETEQUAL,
            seq($._expression, "^=", $._expression),
          ),
          prec.left(
            PRECEDENCE_CARETCOLONEQUAL,
            seq($._expression, "^:=", $._expression),
          ),
          prec.left(
            PRECEDENCE_BARMINUSGREATER,
            seq($._expression, "|->", $._expression),
          ),
          prec.right(
            PRECEDENCE_SLASHCOLON,
            seq($._expression, "/:", $._expression),
          ),
          prec.left(
            PRECEDENCE_SLASHSLASH,
            seq($._expression, "//", $._expression),
          ),
          prec.right(
            PRECEDENCE_SLASHSLASHEQUAL,
            seq($._expression, "//=", $._expression),
          ),
          prec.right(
            PRECEDENCE_PLUSEQUAL,
            seq($._expression, "+=", $._expression),
          ),
          prec.right(
            PRECEDENCE_MINUSEQUAL,
            seq($._expression, "-=", $._expression),
          ),
          prec.right(
            PRECEDENCE_STAREQUAL,
            seq($._expression, "*=", $._expression),
          ),
          prec.right(
            PRECEDENCE_SLASHEQUAL,
            seq($._expression, "/=", $._expression),
          ),
          prec.left(
            PRECEDENCE_SLASHDOT,
            seq($._expression, "/.", $._expression),
          ),
          prec.left(
            PRECEDENCE_SLASHSLASHDOT,
            seq($._expression, "//.", $._expression),
          ),
          prec.right(
            PRECEDENCE_MINUSGREATER,
            seq($._expression, "->", $._expression),
          ),
          prec.right(
            PRECEDENCE_COLONGREATER,
            seq($._expression, ":>", $._expression),
          ),
          prec.right(
            PRECEDENCE_LESSMINUSGREATER,
            seq($._expression, "<->", $._expression),
          ),
          prec.left(
            PRECEDENCE_SLASHSEMI,
            seq($._expression, "/;", $._expression),
          ),
          prec.left(PRECEDENCE_SLASH, seq($._expression, "/", $._expression)),
          prec.right(PRECEDENCE_CARET, seq($._expression, "^", $._expression)),
          prec.left(
            PRECEDENCE_SLASHAT,
            seq($._expression, "/@", $._expression),
          ),
          prec.right(PRECEDENCE_ATAT, seq($._expression, "@@", $._expression)),
          prec.left(
            PRECEDENCE_SLASHSLASHAT,
            seq($._expression, "//@", $._expression),
          ),
          prec.left(
            PRECEDENCE_ATATAT,
            seq($._expression, "@@@", $._expression),
          ),
          prec.right(PRECEDENCE_AT, seq($._expression, "@", $._expression)),
          prec.left(
            PRECEDENCE_INFIX_QUESTION,
            seq($._expression, "?", $._expression),
          ),
          prec.left(
            PRECEDENCE_FAKE_PATTERNCOLON,
            seq($._expression, ":", $._expression),
          ),
          prec.right(PRECEDENCE_LONGNAME_FUNCTION, seq($._expression, "\\[Function]", $._expression)),
          prec.right(PRECEDENCE_LONGNAME_RULE, seq($._expression, "\\[Rule]", $._expression)),
          prec.right(PRECEDENCE_LONGNAME_RULEDELAYED, seq($._expression, "\\[RuleDelayed]", $._expression)),
          prec.right(PRECEDENCE_LONGNAME_TWOWAYRULE, seq($._expression, "\\[TwoWayRule]", $._expression)),
          prec.right(PRECEDENCE_LONGNAME_IMPLIES, seq($._expression, "\\[Implies]", $._expression)),
          prec.right(PRECEDENCE_LONGNAME_ROUNDIMPLIES, seq($._expression, "\\[RoundImplies]", $._expression)),
          prec.right(PRECEDENCE_LONGNAME_DIRECTEDEDGE, seq($._expression, "\\[DirectedEdge]", $._expression)),
          prec.right(PRECEDENCE_LONGNAME_UNDIRECTEDEDGE, seq($._expression, "\\[UndirectedEdge]", $._expression)),
          prec.left(PRECEDENCE_GREATERGREATER, seq($._expression, ">>", $._expression)),
          prec.left(PRECEDENCE_GREATERGREATERGREATER, seq($._expression, ">>>", $._expression)),
        ),

      infix: ($) =>
        choice(
          prec.left(PRECEDENCE_COMMA, seq($._expression, ",", $._expression)),
          prec.left(PRECEDENCE_SEMI, seq($._expression, ";", $._expression)),
          prec.left(
            PRECEDENCE_TILDETILDE,
            seq($._expression, "~~", $._expression),
          ),
          prec.left(PRECEDENCE_BAR, seq($._expression, "|", $._expression)),
          prec.left(PRECEDENCE_BARBAR, seq($._expression, "||", $._expression)),
          prec.left(PRECEDENCE_AMPAMP, seq($._expression, "&&", $._expression)),
          prec.left(
            PRECEDENCE_EQUALEQUALEQUAL,
            seq($._expression, "===", $._expression),
          ),
          prec.left(
            PRECEDENCE_EQUALBANGEQUAL,
            seq($._expression, "=!=", $._expression),
          ),
          prec.left(
            PRECEDENCE_CLASS_INEQUALITY,
            seq($._expression, "==", $._expression),
          ),
          prec.left(
            PRECEDENCE_CLASS_INEQUALITY,
            seq($._expression, "!=", $._expression),
          ),
          prec.left(
            PRECEDENCE_CLASS_INEQUALITY,
            seq($._expression, "<", $._expression),
          ),
          prec.left(
            PRECEDENCE_CLASS_INEQUALITY,
            seq($._expression, "<=", $._expression),
          ),
          prec.left(
            PRECEDENCE_CLASS_INEQUALITY,
            seq($._expression, ">", $._expression),
          ),
          prec.left(
            PRECEDENCE_CLASS_INEQUALITY,
            seq($._expression, ">=", $._expression),
          ),
          prec.left(
            PRECEDENCE_INFIX_PLUS,
            seq($._expression, "+", $._expression),
          ),
          prec.left(
            PRECEDENCE_INFIX_MINUS,
            seq($._expression, "-", $._expression),
          ),
          prec.left(PRECEDENCE_STAR, seq($._expression, "*", $._expression)),
          prec.left(PRECEDENCE_DOT, seq($._expression, ".", $._expression)),
          prec.left(
            PRECEDENCE_STARSTAR,
            seq($._expression, "**", $._expression),
          ),
          prec.left(
            PRECEDENCE_LESSGREATER,
            seq($._expression, "<>", $._expression),
          ),
          prec.left(
            PRECEDENCE_SLASHSTAR,
            seq($._expression, "/*", $._expression),
          ),
          prec.left(PRECEDENCE_ATSTAR, seq($._expression, "@*", $._expression)),
          prec.left(PRECEDENCE_LONGNAME_EQUIVALENT, seq($._expression, "\\[Equivalent]", $._expression)),
          prec.left(PRECEDENCE_LONGNAME_OR, seq($._expression, "\\[Or]", $._expression)),
          prec.left(PRECEDENCE_LONGNAME_NOR, seq($._expression, "\\[Nor]", $._expression)),
          prec.left(PRECEDENCE_LONGNAME_XOR, seq($._expression, "\\[Xor]", $._expression)),
          prec.left(PRECEDENCE_LONGNAME_XNOR, seq($._expression, "\\[Xnor]", $._expression)),
          prec.left(PRECEDENCE_LONGNAME_AND, seq($._expression, "\\[And]", $._expression)),
          prec.left(PRECEDENCE_LONGNAME_NAND, seq($._expression, "\\[Nand]", $._expression)),
          prec.left(PRECEDENCE_LONGNAME_TIMES, seq($._expression, "\\[Times]", $._expression)),
          prec.left(PRECEDENCE_LONGNAME_INVISIBLETIMES, seq($._expression, "\\[InvisibleTimes]", $._expression)),
          prec.left(PRECEDENCE_LONGNAME_DIVIDE, seq($._expression, "\\[Divide]", $._expression)),
          prec.left(PRECEDENCE_LONGNAME_DIVIDES, seq($._expression, "\\[Divides]", $._expression)),
          prec.left(PRECEDENCE_LONGNAME_DIVISIONSLASH, seq($._expression, "\\[DivisionSlash]", $._expression)),
          prec.left(PRECEDENCE_INFIX_LONGNAME_MINUS, seq($._expression, "\\[Minus]", $._expression)),
          prec.left(PRECEDENCE_INFIX_LONGNAME_PLUSMINUS, seq($._expression, "\\[PlusMinus]", $._expression)),
          prec.left(PRECEDENCE_INFIX_LONGNAME_MINUSPLUS, seq($._expression, "\\[MinusPlus]", $._expression)),
        ),

      call: ($) =>
        prec(
          PRECEDENCE_CALL,
          seq(
            field("head", $._expression),
            "[",
            optional(field("arguments", $._expression)),
            "]",
          ),
        ),

      part: ($) =>
        prec(
          PRECEDENCE_CALL,
          seq(
            field("head", $._expression),
            "[[",
            optional(field("arguments", $._expression)),
            "]]",
          ),
        ),

      span: ($) =>
        choice(
          prec.right(
            PRECEDENCE_SEMISEMI,
            seq($._expression, ";;", $._expression),
          ),
          prec.right(
            PRECEDENCE_SEMISEMI,
            seq($._expression, ";;"),
          ),
          prec.right(
            PRECEDENCE_SEMISEMI,
            seq(";;", $._expression),
          ),
          prec.right(
            PRECEDENCE_SEMISEMI,
            ";;",
          ),
        ),

      tilde: ($) =>
        prec.left(PRECEDENCE_TILDE, seq(
          $._expression,
          "~",
          field("function", $._expression),
          "~",
          $._expression,
        )),

      group: ($) =>
        choice(
          seq("{", optional($._expression), "}"),
          seq("(", optional($._expression), ")"),
          seq("[", optional($._expression), "]"),
          seq("<|", optional($._expression), "|>"),
        ),
    },
  })));
