module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ["plugin:vue/essential", "eslint:recommended"],
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off", //强制使用单引号
        quotes: ["error", "single"], //强制不使用分号结尾
        semi: ["error", "never"] //其它规则请参考官网  https://eslint.org/docs/rules/
    },
    parserOptions: {
        parser: "babel-eslint"
    }
};