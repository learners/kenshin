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
  lessInBabelMode: true,
  // 是否提取样式文件
  extractCSS: true,
  // 是否禁用类型检测
  disableTypeCheck: false,
};
