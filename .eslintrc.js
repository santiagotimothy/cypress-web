module.exports = {
	"env": {
		"browser": true
	},
	"extends": [
		"airbnb",
		"plugin:cypress-dev/general",
    	"plugin:cypress-dev/tests"
	],
	"globals": {
		"__DEV__": true
	},
	"parser": "babel-eslint",
	"rules": {
		"react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }],
		"indent": [2, "tab", { "SwitchCase": 1, "VariableDeclarator": 1 }],
		"no-tabs": 0,
		"max-len": [2, { "code": 120, "tabWidth": 1, "ignoreComments": true, "ignoreTrailingComments": true, "ignoreUrls": true, "ignoreStrings": true, "ignoreTemplateLiterals": true, "ignoreRegExpLiterals": true }],
		"arrow-parens": 0,
		"react/jsx-indent": [2, "tab"],
		"react/jsx-indent-props": [2, "tab"],
		"react/forbid-prop-types": 0,
		"react/prefer-stateless-function": 0,
		"import/prefer-default-export": 0,
		"allowElseIf": true,
	},
	"settings": {
		"import/resolver": {
			"babel-module": {}
		}
	},
	"globals": {
		"cy": true,
		"Cypress": true
	}
};
