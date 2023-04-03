module.exports = {
	extends: [
		"@commitlint/config-conventional"
	],
	rules: {
		"scope-enum": [2, "always", [
			"client",
			"ui",
			"proj",
		]],
		"scope-empty": [2, "never"],
	}
}