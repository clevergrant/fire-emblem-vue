module.exports = {
	root: true,
	env: {
		node: true
	},
	"extends": [
		"plugin:vue/essential",
		"eslint:recommended",
		"@vue/typescript",
	],
	plugins: [
		"@typescript-eslint",
		"import-quotes"
	],
	rules: {
		// "no-console": process.env.NODE_ENV === "production" ? "error" : 0,
		// "no-debugger": process.env.NODE_ENV === "production" ? "error" : 0,
		"array-bracket-newline": [
			1,
			{
				"multiline": true
			}
		],
		"array-bracket-spacing": [
			1,
			"never"
		],
		"array-element-newline": 0,
		"block-spacing": 1,
		"brace-style": 0,
		"comma-dangle": [
			1,
			"always-multiline"
		],
		"constructor-super": 1,
		"curly": [
			1,
			"multi-or-nest"
		],
		"dot-location": [
			1,
			"property"
		],
		"eqeqeq": [
			1,
			"always"
		],
		"func-call-spacing": 1,
		"indent": 0,
		"jsx-quotes": [
			1,
			"prefer-single"
		],
		"no-console": 0,
		"no-extra-bind": 1,
		"no-multi-spaces": 1,
		"no-multiple-empty-lines": [
			1,
			{
				"max": 1,
				"maxEOF": 1
			}
		],
		"no-trailing-spaces": 1,
		"no-unneeded-ternary": 1,
		"no-unused-vars": 0,
		"no-var": 1,
		"object-shorthand": 1,
		"prefer-arrow-callback": 1,
		"prefer-const": 1,
		"prefer-template": 1,
		"quotes": 0,
		"semi": 0,
		"spaced-comment": [
			1,
			"always"
		],
		"template-curly-spacing": [
			1,
			"never"
		],
		"yoda": [
			1,
			"never"
		],
		// Import Quotes
		"import-quotes/import-quotes": [
			1,
			"single"
		],
		// Vue Rules
		"vue/html-indent": [
			1,
			"tab"
		],
		"vue/html-quotes": [
			1,
			"single"
		],
		"vue/script-indent": [
			1,
			"tab",
			{
				"baseIndent": 1,
				"switchCase": 1,
			}
		],
		"vue/v-bind-style": [
			1,
			"shorthand"
		],
		"vue/v-on-style": [
			1,
			"shorthand"
		],
		// Typescript Rules
		"@typescript-eslint/brace-style": 1,
		"@typescript-eslint/explicit-function-return-type": 0,
		"@typescript-eslint/interface-name-prefix": 0,
		"@typescript-eslint/member-delimiter-style": [
			1,
			{
				"multiline": {
					"delimiter": "none",
					"requireLast": false
				},
				"singleline": {
					"delimiter": "comma"
				}
			}
		],
		"@typescript-eslint/member-naming": [
			1,
			{
				"private": "^__",
				"protected": "^_"
			}
		],
		"@typescript-eslint/no-empty-interface": [
			1,
			{
				"allowSingleExtends": true
			}
		],
		"@typescript-eslint/no-explicit-any": 0,
		"@typescript-eslint/no-unused-vars": [
			1,
			{
				"vars": "local",
				"varsIgnorePattern": "^c",
				"argsIgnorePattern": "^c",
				"args": "after-used",
				"ignoreRestSiblings": true
			}
		],
		"@typescript-eslint/no-use-before-define": 0,
		"@typescript-eslint/quotes": [
			1,
			"backtick"
		],
		"@typescript-eslint/semi": [
			1,
			"never"
		]
	},
	parserOptions: {
		parser: "@typescript-eslint/parser"
	}
}
