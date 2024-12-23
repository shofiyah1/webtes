module.exports = {
    outputDir: 'dist', // Ganti 'custom-folder-name' dengan nama yang Anda inginkan
    chainWebpack: config => {
        config.module.rules.delete('eslint');
    }
};