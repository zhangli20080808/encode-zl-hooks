const merge = require('webpack-merge');
const common = require('../../webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  entry: './es/index.js',
  output: {
    filename: 'encodeHooks.js',
    library: 'encodeHooks',
    path: path.resolve(__dirname, './dist'),
    hashFunction: 'sha256', // 修改为支持的哈希算法
  },
});
