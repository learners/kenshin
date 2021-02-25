export default {
  esm: {
    type: 'babel',
    importLibToEs: true
  },
  cjs: {
    type: 'babel',
    lazy: true //是否开启 lazy require 对于工具来说推荐开启，可加速命令行执行速度，同时减少依赖和耦合
  },
  umd: {},
  // doc: {
  //   base: '/dist'
  // },
  disableTypeCheck: true
}
