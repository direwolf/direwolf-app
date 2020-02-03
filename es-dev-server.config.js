module.exports = {
  port: 8000,
  watch: true,
  nodeResolve: {
    browser: true,
    mainFields: ['module', 'browser', 'main']
  },
  babelConfig: {
    plugins: [["babel-plugin-transform-commonjs", {"onlyExports": true}]]
  },
  dedupe: true,
  preserveSymlinks: true,
  appIndex: 'index.html',
  moduleDirs: ['node_modules']
}
