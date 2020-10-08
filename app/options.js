const babelOptions = (env, argv) => ({
    cacheDirectory: (argv.mode === 'development'),
    plugins: [
        ['@babel/plugin-proposal-decorators', { decoratorsBeforeExport: true }],
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-throw-expressions',
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-syntax-dynamic-import'
    ],
    
});

const imageOptions = () => ({
    limit: 10000,
    name: 'static/[name].[hash:8].[ext]'
});

module.exports = {
    babelOptions,
    imageOptions,
};