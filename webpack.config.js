const path = require('path');

let listFile = ['inline', 'polyfills', 'styles', 'scripts', 'vendor', 'main'];
var generateListFile = function () {
    let obj = {};
    listFile.forEach(item => {
        obj[item] = ``
    })
}
module.exports = {
    entry: {
        "inline"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js"
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: true
        })
    ]
};