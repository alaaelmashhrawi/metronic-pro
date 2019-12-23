// const webpack = require("webpack");
const path = require('path');


module.exports = {
    runtimeCompiler: true,
    // outputDir: 'public',
    // publicPath: '',
    lintOnSave: false,
    chainWebpack: config => {
        config.optimization.delete('splitChunks');
    },
    configureWebpack: {

        resolve: {
            alias: {"jquery": path.resolve(__dirname, './public/assets/plugins/jquery-ui/jquery-ui.min.js')}
        }
    },
    pages: {
        admin: {
            entry: 'resources/js/admin/app.js',
            template: 'resources/js/admin/views/index.html',
            filename: 'admin.html',
            assetsDir: 'resources/js/admin/assets',
            publicPath: 'resources/js/admin/assets'
        },
        slotsExample: {
            entry: 'resources/js/slotsExample/app.js',
            template: 'resources/js/slotsExample/views/index.html',
            filename: 'slotsExample.html',
            assetsDir: 'resources/js/slotsExample/assets',
            publicPath: 'resources/js/slotsExample/assets'
        },

    },

}