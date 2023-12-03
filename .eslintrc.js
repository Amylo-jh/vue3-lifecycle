module.exports = {
    parser: "vue-eslint-parser",
    env: {
        browser: true,
        node: true
    },
    extends: [
        // vue
        //'plugin:vue/vue3-essential', //lv 1
        'plugin:vue/vue3-strongly-recommended', //lv2
        //'plugin:vue/vue3-recommended' //lv3
        // js
        'eslint:recommended'
    ],
    rules: {
        "vue/html-closing-bracket-newline" : ["error", {
            "singleline" : "never",
            "multiline" : "never"
        }]
    }
}