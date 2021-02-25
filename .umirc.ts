import { defineConfig } from 'dumi'

export default defineConfig({
  title: 'demo',
  favicon: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  // more config: https://d.umijs.org/config
  targets: { ie: 9 },
  polyfill: {
    // 兼容臭名昭著 IE9+ 的 polyfill
    imports: [
      'element-remove',
      'babel-polyfill'
    ]
  },
  history: { type: 'hash' },
  publicPath: './',
  dynamicImport: {},
  // 按需引入
  // import { Button } from 'kenshin'; // 这里会按需引入样式
  // extraBabelPlugins: [
  //   [
  //     'import',
  //     {
  //       libraryName: 'kenshin',
  //       camel2DashComponentName: false,
  //       customStyleName: (name: string) => `./style/index.less` // 注意：这里 ./ 不可省略
  //     },
  //     'kenshin'
  //   ]
  // ]
})
