module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:react/recommended", "plugin:storybook/recommended"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["@typescript-eslint", "react"],
  "rules": {
    // suppress errors for missing 'import React' in files
    "react/react-in-jsx-scope": "off",
    // allow jsx syntax in js files (for next.js project)
    "react/jsx-filename-extension": [1, {
      "extensions": [".ts", ".tsx"]
    }],
    //should add ".ts" if typescript project
    "@typescript-eslint/ban-ts-comment": ["error", {
      "ts-ignore": "allow-with-description"
    }]
  }
};