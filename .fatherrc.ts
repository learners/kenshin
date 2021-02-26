import pkg from './package.json';

export default {
  esm: {
    type: 'babel',
    minify: false,
    importLibToEs: true,
  },
  cjs: {
    type: 'babel',
    lazy: true,
  },
  umd: {
    name: pkg.name,
    file: pkg.name,
    minFile: true,
  },
  lessInBabelMode: true,
  // 是否提取样式文件
  extractCSS: true,
  // 是否禁用类型检测
  disableTypeCheck: false,
};
