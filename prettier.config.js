module.exports = {
  arrowParens: 'always',
  bracketSameLine: true,
  bracketSpacing: true,
  jsxSingleQuote: true,
  printWidth: 130,
  proseWrap: 'always',
  quoteProps: 'consistent',
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'none',
  useTabs: false,
  parser: 'typescript',
  plugins: [require('prettier-plugin-tailwindcss')],
  editorconfig: true
}
