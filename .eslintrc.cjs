const path = require('path');

module.exports = {
  root: true,
  extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
  plugins: ['no-relative-import-paths', 'unused-imports', '@typescript-eslint'],
  parserOptions: {
    project: path.join(__dirname, '/tsconfig.json'),
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: { next: './' },
  rules: {
    // 사용하지 않는 변수가 있을 시 경고
    'no-unused-vars': 'off',
    // import 순서
    // 'import/order': [
    //   'warn',
    //   {
    //     alphabetize: { order: 'asc' },
    //     'newlines-between': 'always',
    //     warnOnUnassignedImports: false,
    //   },
    // ],
    // <div></div>처럼 빈 태그가 있을 시 경고
    // 'react/self-closing-comp': 'warn',
    // 컴포넌트가 함수선언식이 아닐 시 경고
    // 'react/function-component-definition': [
    //   'warn',
    //   {
    //     namedComponents: 'function-declaration',
    //     unnamedComponents: 'function-expression',
    //   },
    // ],
    // key 값으로 index 사용 시 에러
    // 'react/no-array-index-key': 'error',
    // 사용하지 않는 import 존재 시 경고
    'unused-imports/no-unused-imports': 'warn',
    // console.log 존재 시 경고
    'no-console': ['warn', { allow: ['warn', 'count', 'error', 'info'] }],
    // any로 타입 추론이 되거나 사용 시 경고
    '@typescript-eslint/no-explicit-any': 'warn',
    // type은 import 시 import type 안붙여주면 경고
    '@typescript-eslint/consistent-type-imports': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    // Next-image 사용 강제하는 옵션
    '@next/next/no-img-element': 'off',
    // 상대 경로 시 에러
    'no-relative-import-paths/no-relative-import-paths': ['error', { allowSameFolder: true }],
    // 특정 컴포넌트 import 방지 및 경로 미통일 방지
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'react-i18next',
            importNames: ['useTranslation'],
            message: "'useTranslation' is not allowed. Use useClientTranslation or useServerTranslation.",
          },
          {
            name: 'next/router',
            importNames: ['useRouter'],
            message: "'useRouter' is not allowed. Use 'useCustomRouter' instead.",
          },
          {
            name: 'next/navigation',
            importNames: ['useRouter'],
            message: "'useRouter' is not allowed. Use 'useCustomRouter' instead.",
          },
          {
            name: 'axios',
            importNames: ['default'],
            message: 'import axios in service code is restricted.',
          },
        ],
        patterns: [
          {
            group: ['@/api/*'],
            message: 'Import from "@/api" instead.',
          },
          {
            group: ['@/utils/*'],
            message: 'Import from "@/utils" instead.',
          },
          {
            group: ['@/types/*'],
            message: 'Import from "@/types" instead.',
          },
          {
            group: ['@/hooks/*'],
            message: 'Import from "@/hooks" instead.',
          },
          {
            group: ['@/modules/*'],
            message: 'Import from "@/modules" instead.',
          },
          {
            group: ['@/stores/*'],
            message: 'Import from "@/stores" instead.',
          },
        ],
      },
    ],
    // 특정 타입 사용 금지
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          // add a custom message to help explain why not to use it
          Foo: "Don't use Foo because it is unsafe",

          // add a custom message, AND tell the plugin how to fix it
          OldAPI: {
            message: 'Use NewAPI instead',
            fixWith: 'NewAPI',
          },

          // un-ban a type that's banned by default
          '{}': false,
        },
        extendDefaults: true,
      },
    ],
    // 템플릿 스트링 권고
    'prefer-template': 'warn',
    // app 디렉토리 사용
    // '@next/next/no-html-link-for-pages': ['error', 'src/app'],
    'react/display-name': 'off',
    'jsx-a11y/alt-text': 'off',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/ban-ts-comment': ['off', { ignoreVoid: true }],
    '@typescript-eslint/no-empty-function': 'warn',
    'import/no-anonymous-default-export': 'off',
    // 'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'always', propElementValues: 'always' }],
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/consistent-type-imports': 'off',
    // 'react-hooks/exhaustive-deps': ['warn'],
  },
};
