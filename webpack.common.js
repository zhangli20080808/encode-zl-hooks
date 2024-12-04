module.exports = {
  output: {
    libraryTarget: 'umd',
    globalObject: 'this',
    hashFunction: 'sha256', // 修改为支持的哈希算法
  },
  mode: 'production',
  resolve: {
    extensions: ['.json', '.js'],
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.jsx?$/,
  //       use: {
  //         loader: 'babel-loader',
  //       },
  //     }
  //   ],
  // },
  externals: [
    {
      react: 'React',
    },
  ],
};
