import webpack from 'webpack';
import path from 'path';

const config: webpack.Configuration = {
    module: {
        rules: [

        ],
    },
    plugins: [

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
