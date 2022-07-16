module.exports = {
	// extends: ['@commitlint/config-conventional'],
	rules: {
		'type-enum': [
			1,
			'always',
			[
				'feat',
				'fix',
				'docs',
				'chore',
				'style',
				'refactor',
				'ci',
				'test',
				'revert',
				'perf',
				'build',
				'vercel',
			],
		],
	},
}
