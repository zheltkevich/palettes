import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
    pluginJs.configs.recommended,
    ...pluginVue.configs['flat/recommended'],
    eslintConfigPrettier,
    {
        ignores: ['dist/**'],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        rules: {
            'no-console': [
                'error',
                {
                    allow: ['warn', 'error'],
                },
            ],
            'no-unused-vars': [
                'error',
                {
                    argsIgnorePattern: '^_',
                },
            ],
            'vue/attribute-hyphenation': ['error', 'never'],
            'vue/v-on-event-hyphenation': ['error', 'never', { autofix: true }],
            'vue/html-self-closing': [
                'error',
                {
                    html: {
                        normal: 'always',
                        void: 'always',
                        component: 'always',
                    },
                    svg: 'always',
                    math: 'always',
                },
            ],
        },
    },
]
