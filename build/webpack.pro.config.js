const { CleanWebpackPlugin } = require('clean-webpack-plugin')//每次成功构建清空dist目录

module.exports = {
    plugins: [
        new CleanWebpackPlugin()
    ]
}