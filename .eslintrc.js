module.exports = {
  parserOptions: {
    ecmaVersion: 2018, // ECMAScriptバージョン（ここでは2018を指定）
    sourceType: 'module', // import構文のサポート
  },
  plugins: [
    'vue' // Vueプラグインの追加
  ],
  extends: [
    'plugin:vue/vue3-essential', // Vue3の場合
    // 'plugin:vue/essential', // Vue2の場合
    'eslint:recommended'
  ],
  // 他の設定
}
