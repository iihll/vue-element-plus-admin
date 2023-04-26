module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix'],
  '{!(package)*.json,*.code-snippets,.!(browserslist)*rc}': ['eslint --fix'],
  'package.json': ['eslint --fix'],
  '*.vue': ['eslint --fix'],
  '*.{scss,less,styl,css,html}': ['eslint --fix'],
  '*.md': ['eslint --fix'],
  '*.hbs': ['eslint --fix']
}
