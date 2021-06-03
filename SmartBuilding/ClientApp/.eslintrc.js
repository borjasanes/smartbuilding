module.exports = {
    extends: [
        'react-app',
        'react-app/jest',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'prettier',
        'plugin:prettier/recommended'
    ],
    rules: {
        'no-empty-function': 'off',
        'template-curly-spacing': 'off',
        'react/display-name': 'off',
        'react/jsx-key': 'off',
        'react/prop-types': 'warn',
        'react-hooks/exhaustive-deps': 'off',
        'react-hooks/rules-of-hooks': 'error',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-inferrable-types': 0,
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/prefer-interface': 'off',
        'prettier/prettier': ['error', { endOfLine: 'auto' }]
    }
};
