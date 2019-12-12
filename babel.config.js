module.exports = {
  presets: [
    '@vue/app',
    ["@babel/preset-env", {
      useBuiltIns: "usage", // or "entry"
      corejs: 3,
    }]
  ],
  plugins: [
    [
      "import",
      { libraryName: "ant-design-vue", libraryDirectory: "es", style: true }
    ]
  ]
}
