module.exports = {
	extends: 'airbnb-typescript-prettier',
	parserOptions: {
		project: './tsconfig.json',
	},
	plugins: ['simple-import-sort'],
	settings: {
		'import/resolver': {
			typescript: {},
		},
	},
	rules: {
		"import/no-extraneous-dependencies": 0
	},
	overrides: [
		{
			files: '*.js*',
			rules: {
				'@typescript-eslint/no-var-requires': 'off',
			},
		},
		{
			files: ['*.test.ts*'],
			rules: {
				'@typescript-eslint/no-non-null-assertion': 'off',
			},
		},
		{
			files: ['*.ts*'],
			rules: {
				'simple-import-sort/imports': [
					'error',
					{
						groups: [['^react', '^@?(?!case-system)\\w'], ['^@case-system'], ['^@/'], ['^\\.'], ['^.+\\.s?css$']],
					},
				],
			},
		},
	],
};
