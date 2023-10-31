module.exports = {
    plugins: ["@typescript-eslint", "import", "prettier"],
    extends: [
        "airbnb-typescript/base",
        "plugin:prettier/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:import/typescript"
    ],
    parser: "@typescript-eslint/parser",
    ignorePatterns: ["dist/*", "dist/**/*"]
};
