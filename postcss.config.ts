module.exports = {
    plugins: {
      'postcss-pxtorem': {
        rootValue: 75, // 根元素字体大小，通常设置为设计稿的基准值
        propList: ['*'], // 需要转换的属性列表，这里表示所有属性
        selectorBlackList: ['.ignore', '.hairlines'], // 不需要转换的选择器
        minPixelValue: 2, // 最小的需要转换的像素值
        mediaQuery: false, // 是否允许在媒体查询中转换 px
        replace: true, // 是否直接更换属性值，而不添加备用属性
        unitPrecision: 5, // 转换后的精度，即小数点位数
        exclude: /node_modules/ // 忽略的文件或文件夹
      }
    }
  };
  