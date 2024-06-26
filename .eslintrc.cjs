module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'prettier',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    plugins: ['@typescript-eslint', 'react-refresh'],
    rules: {
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
    },
};
