/** @type {import('prettier').Config} */
module.exports = {
  // ── Quotes ───────────────────────────────────────────────────────────────
  singleQuote: true, // Always single quotes instead of double

  // ── Semicolons ───────────────────────────────────────────────────────────
  semi: true, // Always add semicolons

  // ── Trailing commas ──────────────────────────────────────────────────────
  trailingComma: 'all', // Trailing commas

  // ── Line length ──────────────────────────────────────────────────────────
  printWidth: 100, // Wrap lines at 100 chars

  // ── Indentation ──────────────────────────────────────────────────────────
  useTabs: false,

  // ── Brackets ─────────────────────────────────────────────────────────────
  bracketSpacing: true, // { foo: bar } with spaces
  bracketSameLine: false, // JSX closing > on new line
  arrowParens: 'always', // Always (x) => x, never x => x

  // ── End of line ──────────────────────────────────────────────────────────
  endOfLine: 'lf', // Unix line endings (important for CI/Git)
};