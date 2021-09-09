module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier'
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
 "rules": {
    "at-rule-no-unknown": [
      true,
      {
        "ignoreAtRules": [
          "tailwind",
          "apply",
          "variants",
          "responsive",
          "screen",
          "function",
          "each",
          "if",
          "else",
          "return",
          "layer"
        ]
      }
    ],
    "declaration-block-trailing-semicolon": null,
    "no-descending-specificity": [
      true,
      {
        "ignore": [
          "selectors-within-list"
        ]
      }
    ],
    "no-invalid-double-slash-comments": true,
    "block-no-empty": null
  }
}

