"use strict";

module.exports = {
    extends: [
        "airbnb",
        "eslint:recommended",
        "plugin:import/errors",
        "plugin:jsx-a11y/recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "prettier"
    ],
    plugins: [
        "@typescript-eslint",
        "prettier",
        "sort-keys-fix"
    ],
    rules: {
        "arrow-body-style": "error",
        "arrow-parens": "error",
        "comma-dangle": [
            "error",
            "only-multiline"
        ],
        "complexity": "off",
        "curly": "off",
        "dot-notation": "error",
        "eqeqeq": [
            "error",
            "always"
        ],
        "guard-for-in": "error",
        "import/extensions": "off",
        "import/newline-after-import": "error",
        "import/no-extraneous-dependencies": [
            "error",
            {
                "devDependencies": [
                    "**/*.test.ts",
                    "**/*.test.tsx",
                    "vitest.config.ts"
                ]
            }
        ],
        "import/no-unresolved": "off",
        "import/no-useless-path-segments": [
            "error",
            {
                "noUselessIndex": true
            }
        ],
        "import/order": [
            "error",
            {
                "alphabetize": {
                    "order": "asc",
                    "caseInsensitive": true
                },
                "newlines-between": "never"
            }
        ],
        "indent": [
            "error",
            2,
            {
                "SwitchCase": 1
            }
        ],
        "jsx-a11y/anchor-is-valid": [
            "error",
            {
                "components": [
                    "Link"
                ],
                "specialLink": [
                    "hrefLeft",
                    "hrefRight"
                ],
                "aspects": [
                    "invalidHref",
                    "preferButton"
                ]
            }
        ],
        "jsx-quotes": [
            "error",
            "prefer-double"
        ],
        "max-classes-per-file": [
            "error",
            1
        ],
        "multiline-comment-style": [
            "error",
            "separate-lines"
        ],
        "new-parens": "error",
        "no-bitwise": "error",
        "no-caller": "error",
        "no-console": "off",
        "no-duplicate-imports": "error",
        "no-eval": "error",
        "no-multiple-empty-lines": "error",
        "no-new-wrappers": "error",
        "no-param-reassign": "error",
        "no-restricted-imports": [
            "error",
            {
                "patterns": [
                    {
                        "group": [
                            "**/./*",
                            "!*.module.scss",
                            "!*.test.tsx"
                        ],
                        "message": "No relative import allowed."
                    }
                ]
            }
        ],
        "no-restricted-globals": "error",
        "no-shadow": "error",
        "no-throw-literal": "error",
        "no-trailing-spaces": "error",
        "no-undef-init": "error",
        "no-unused-expressions": [
            "error",
            {
                "allowShortCircuit": true,
                "allowTernary": true
            }
        ],
        "no-unused-vars": "off",
        "no-var": "error",
        "object-curly-spacing": [
            "error",
            "always"
        ],
        "object-shorthand": "error",
        "prefer-const": "error",
        "prettier/prettier": [
            "error",
            {
                "printWidth": 140
            }
        ],
        "quotes": "off",
        "quote-props": [
            "error",
            "as-needed"
        ],
        "radix": "error",
        "react/function-component-definition": [
            "error",
            {
                "namedComponents": "arrow-function"
            }
        ],
        "react/jsx-filename-extension": [
            "error",
            {
                "extensions": [
                    ".tsx"
                ]
            }
        ],
        "react/jsx-pascal-case": "error",
        "react/react-in-jsx-scope": "off",
        "react/require-default-props": "off",
        "sort-keys": "error",
        "sort-keys-fix/sort-keys-fix": "warn",
        "spaced-comment": [
            "error",
            "always"
        ]
    },
    "overrides": [
        {
            "files": [
                "*.ts",
                "*.tsx"
            ],
            "rules": {
                "no-undef": "off"
            }
        },
        {
            "files": [
                "*.test.tsx"
            ],
            "rules": {
                "no-restricted-imports": "off"
            }
        }
    ]
};