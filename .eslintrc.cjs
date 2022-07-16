// http://eslint.org/docs/user-guide/configuring

module.exports = {
	root: true,
	parserOptions: {
		// sourceType: 'module',
		// parser: '@babel/eslint-parser'
	},
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		jquery: false
	},
	// https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
	// required to lint *.vue files
	extends: [
		"@nuxtjs/eslint-config-typescript",
		"plugin:nuxt/recommended",
	],
	plugins: ['import', 'vue'],
	// add your custom rules here
	rules: {
		indent: [1, 'tab', {
			ignoredNodes: ['TemplateLiteral']
		}],
		"vue/multi-word-component-names": "off",
		"vue/no-multiple-template-root": "off",
		"no-mixed-spaces-and-tabs": "off",
		"@typescript-eslint/no-unused-vars": "off",
		'comma-dangle': ['error', {
			arrays: 'ignore',
			objects: 'ignore',
			imports: 'ignore',
			exports: 'ignore',
			functions: 'ignore'
		}],
		curly: ['error', 'multi-or-nest'],
		'vue/html-closing-bracket-newline': ['error', {
			singleline: 'never',
			multiline: 'never'
		}],
		// allow paren-less arrow functions
		camelcase: 0,
		eqeqeq: 0,
		'no-tabs': 0,
		'no-undef': 0,
		'vue/no-use-v-if-with-v-for': 1,
		'arrow-parens': 0,
		// allow async-await
		'generator-star-spacing': 0,
		// allow debugger during development
		'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
		// custom
		'space-before-function-paren': 0,
		'object-property-newline': 0,
		'new-cap': 0,
		'no-eval': 0,
		semi: 0,
		'no-useless-escape': 0,
		'no-implied-eval': 0
	}
}
