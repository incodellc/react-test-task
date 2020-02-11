module.exports = {
    "presets": [
        "@babel/preset-react", "@babel/preset-env"
    ],
    "plugins": ["react-hot-loader/babel", "@babel/plugin-proposal-class-properties"],
    // "test": {
    //     "presets": ["@babel/preset-react", "@babel/preset-env"],
    //     "plugins": ["transform-export-extensions"],
    //     "only": [
    //       "./**/*.js",
    //       "node_modules/jest-runtime"
    //     ]
    // }
}
// {
//     "presets": ["react", "es2015", "stage-0"],
//     "plugins": ["react-hot-loader/babel"]
// }