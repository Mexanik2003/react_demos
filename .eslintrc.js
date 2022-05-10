module.exports = {
  extends: [
    "react-app", // см. пункт 1
    "plugin:prettier/recommended", // см. пункт 2
  ],
  plugins: ["jsdoc"],
  rules: {
    curly: "error",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react-hooks/exhaustive-deps": "off",
    "jsx-a11y/alt-text": "off",
    "jsx-a11y/anchor-has-content": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "import/order": [
      "error",
      {
        "newlines-between": "never",
        alphabetize: {
          order: "asc",
          caseInsensitive: false,
        },
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        pathGroups: [
          {
            pattern: "react",
            group: "builtin",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
      },
    ],
    "import/no-anonymous-default-export": "off",
    "import/newline-after-import": ["error"],

    "sort-imports": [
      "error",
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
        allowSeparatedGroups: false,
      },
    ],

    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { vars: "all", args: "after-used", argsIgnorePattern: "^_" },
    ],

    "no-undef": "error",
    "no-console": ["error", { allow: ["warn", "error"] }],
  },
  globals: {
    React: true,
    JSX: true,
  },
};
