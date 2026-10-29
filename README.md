# tree-sitter-wolfram

A [tree-sitter](https://tree-sitter.github.io/) grammar for the [Wolfram Language](https://www.wolfram.com/language/).

## Supported file types

`.wl`, `.m`, `.wls`, `.wlt`, `.mt`, `.nb`

## Building

`grammar.js` is the source of truth. After any change to it, regenerate the C
parser in `src/` (`parser.c`, `grammar.json`, `node-types.json`):

```bash
npx tree-sitter generate
```

## Testing

Runs the corpus under `test/`:

```bash
npx tree-sitter test
```

## Usage with Zed

This grammar is used by the [zed-wolfram-highlighter](https://github.com/WolframResearch/zed-wolfram-highlighter) extension to provide syntax highlighting in the [Zed](https://zed.dev) editor.

## Usage from Rust

The crate is not published to crates.io; depend on it from git, pinned to a commit:

```toml
[dependencies]
tree-sitter = "0.26"
tree-sitter-wolfram = { git = "https://github.com/WolframResearch/tree-sitter-wolfram", rev = "<commit>" }
```

```rust
let mut parser = tree_sitter::Parser::new();
parser.set_language(&tree_sitter_wolfram::LANGUAGE.into())?;
let tree = parser.parse("f[x_] := x^2", None).unwrap();
```

`NODE_TYPES` exposes `src/node-types.json`.

## License

MIT

Originally based on [bostick/tree-sitter-wolfram](https://github.com/bostick/tree-sitter-wolfram) by Brenton Bostick (2021).
