module.exports = {
	extends: [
		"@commitlint/config-conventional"
	],
	rules: {
		"scope-enum": [2, "always", [
			"api",
			"client",
			"ui",
			"proj",
			"docs",
		]],
		"scope-empty": [2, "never"],
	}
}