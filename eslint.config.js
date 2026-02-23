import neostandard from 'neostandard'
import eslintPluginAstro from 'eslint-plugin-astro'

export default [
  ...eslintPluginAstro.configs.recommended,
  ...neostandard({ noJsx: true, ts: true }),
]
