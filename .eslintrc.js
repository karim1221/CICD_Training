module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'playwright'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:playwright/recommended',
    'prettier', // Must be last — disables ESLint rules that conflict with Prettier
  ],
  rules: {
    // ── Playwright best practices ─────────────────────────────────────────
    'playwright/no-wait-for-timeout': 'error', // Prefer auto-waiting over manual waits
    'playwright/prefer-web-first-assertions': 'error', // Use expect(locator).toBeVisible() etc.
    'playwright/no-useless-await': 'error', // Remove unnecessary awaits
    'playwright/valid-expect': 'error', // Catch invalid expect() calls
    'playwright/expect-expect': 'error', // Every test must have at least one assertion
    'playwright/no-page-pause': 'error', // Never leave page.pause() in code

    // ── TypeScript best practices ─────────────────────────────────────────
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-misused-promises': 'error',
    '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',

    // ── General best practices ────────────────────────────────────────────
    'no-console': 'error',
    'no-debugger': 'error',
    'prefer-const': 'error',
    'no-var': 'error',
    'no-duplicate-imports': 'error',
  },
  env: {
    node: true,
    es2022: true,
  },
  ignorePatterns: ['dist/', 'node_modules/', 'playwright-report/', 'test-results/'],
};