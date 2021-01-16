import webpack from 'webpack';
import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

const config: webpack.Configuration = {
    module: {
        rules: [
            {
                test: /\.s?css$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
                options: {
                    // disable type checker - use it in fork plugin
                    transpileOnly: true,
                },
            },

        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        }),
        new FriendlyErrorsWebpackPlugin(),
        new ForkTsCheckerWebpackPlugin({
            eslint: {
                files: './ts/**/*.ts',
            },
        }),
    ],
    resolve: {
        extensions: ['.ts', '.js'],
    },
    mode: 'production',
    devtool: 'source-map',
    optimization: {
        noEmitOnErrors: false,
    },
    stats: 'errors-only',
    entry: {
        home: ['./ts/home.ts'],
        game: ['./ts/game.ts'],
    },
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, './build'),
    },
};

export default config;
