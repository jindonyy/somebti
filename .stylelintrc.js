/** @type {import('stylelint').Config} */
module.exports = {
    extends: ['stylelint-config-standard-scss', 'stylelint-config-recess-order'],
    rules: {
        'declaration-block-no-duplicate-properties': true,
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': [true, { ignoreAtRules: ['tailwind'] }],
        'color-hex-length': 'long',
        'selector-class-pattern': '',
        'color-function-notation': ['legacy'],
        'alpha-value-notation': null,
        'length-zero-no-unit': null,
        'keyframes-name-pattern': null,
        'no-descending-specificity': null,
    },
    ignoreFiles: ['.next/**/*.{css,scss}'],
};
