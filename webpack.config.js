const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const { exec } = require('child_process');
const TerserPlugin = require('terser-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = () => {
    return {
        optimization: {
            minimize: true,
            minimizer: [
                new TerserPlugin({
                    terserOptions: {
                        parse: {
                            ecma: 8,
                        },
                        compress: {
                            ecma: 5,
                            warnings: false,
                            comparisons: false,
                            inline: 2,
                        },
                        mangle: {
                            safari10: true,
                        },
                        output: {
                            ecma: 5,
                            comments: false,
                            ascii_only: true,
                        },
                    },
                    parallel: true,
                }),
            ],
        },
        entry: {
            background: ['./node_modules/webextension-polyfill/dist/browser-polyfill.js', './src/background/index.js'],
            content: ['./node_modules/webextension-polyfill/dist/browser-polyfill.js', './src/content/index.js'],
            popup: ['./node_modules/webextension-polyfill/dist/browser-polyfill.js', './src/popup/index.js']
        },
        resolve: {
            extensions: ['.js', '.jsx'],
        },
        ...(!isProduction && { devtool: 'inline-source-map' }),
        module: {
            rules: [
                {
                    test: /\.js$|jsx/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                    },
                },
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader'],
                },
            ],
        },
        plugins: [
            new CopyPlugin({
                patterns: [
                    { from: './src/assets', to: 'assets' },
                    { from: './manifest.json', to: 'manifest.json' },
                    { from: './src/popup/popup.html', to: 'popup.html' },
                ],
            }),
            new Dotenv({
                systemvars: true,
                path: `.env`,
            }),
            {
                apply: compiler => {
                    compiler.hooks.environment.tap('RunTranslationsPlugin', () => {
                        exec('yarn run translate', (_, stdout, stderr) => {
                            if (stdout) process.stdout.write(stdout);
                            if (stderr) process.stderr.write(stderr);
                        });
                    });
                },
            },
        ],
        output: {
            publicPath: '/',
            path: path.join(__dirname, isProduction ? './production' : './build'),
            filename: '[name].js',
        },
    };
};