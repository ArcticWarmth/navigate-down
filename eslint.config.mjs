import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
    {
        ignores: [
            "node_modules/",
            ".vscode*",
            "*.config.mjs",
            "test/"
        ]
    },
    {
        files: ['extension.js'],
        languageOptions: {
            globals: {
                ...globals.commonjs,
                ...globals.node,
                ...globals.mocha
            },
            sourceType: "module",
            ecmaVersion: 2022
        },
        rules: {
            "no-const-assign": "warn",
            "no-this-before-super": "warn",
            "no-undef": "warn",
            "no-unreachable": "warn",
            "no-unused-vars": "warn",
            "constructor-super": "warn",
            "valid-typeof": "warn",
        }
    }
])