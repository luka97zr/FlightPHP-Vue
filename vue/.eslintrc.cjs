/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
	root: true,
	extends: [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'@vue/eslint-config-typescript',
		'@vue/eslint-config-prettier/skip-formatting'
	],
	parserOptions: {
		ecmaVersion: 'latest'
	},
	rules: {
		'quotes': 'off',
		'array-callback-return': [ 'warn' ],
		'arrow-body-style': [ 'error', 'as-needed' ],
		'camelcase': [ 'warn' ],
		'eqeqeq': [ 'error' ],
		'no-alert': [ 'error' ],
		'no-var': [ 'error' ],

		// Prefer const over a variable that is never re-assigned
		'prefer-const': [ 'warn' ],

		// Quote properties of objects when they have a space or dash
		'quote-props': [ 'warn', 'consistent-as-needed' ],

		// Prefer template strings over string concatenation
		'prefer-template': [ 'warn' ],

		// Always have space after the comment start
		'spaced-comment': [ 'warn', 'always' ],

		// No whitespace at the end of lines
		'no-trailing-spaces': [ 'warn' ],

		// No spaces before the semi-colon at the end of a line
		'semi-spacing': [ 'warn', { before: false, after: true }],

		'semi': 'off',

		'test' :	'off',
		'no-tabs' :	'off',
		'indend' :	'off',
		'vue/html-indent' :	[ 'error', 'tab' ],
		'@typescript-eslint/indent' :	[ 'error', 'tab' ],

		// Spacings in arrays and objects
		'array-bracket-spacing': [ 'error', 'always', { objectsInArrays: false, arraysInArrays: true }],
		'brace-style': 'off',
		'vue/brace-style': 'off',
		'@typescript-eslint/brace-style': [ 'error', '1tbs', { allowSingleLine: false }],
		'curly': [ 'error', 'all' ],
		'object-curly-spacing': [ 'error', 'always' ],
		'vue/object-curly-spacing': [ 'error', 'always' ],
		'@typescript-eslint/object-curly-spacing': [ 'error', 'always' ],

		// Make sure we're using <script setup>
		'vue/component-api-style': [ 'error', [ 'script-setup' ] ],

		// 'vue/max-attributes-per-line': ['warn', { singleline: 3, multiline: { max: 1, allowFirstLine: true }}],

		'vue/block-lang': [ 'error', { script: { lang: 'ts' }, style: { lang: 'scss' } }],

		// 'vue-scoped-css/enforce-style-type': [ 'error', { allows: [ 'scoped' ] }]
	}
}
