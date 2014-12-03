module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  entry: {
    Client: "./client.js"
  },
  output: {
    libraryTarget: "var",
    library: "examples",
    path: './build',
    filename: "[name].js"
  },
  externals: {
    "jquery": "jQuery",
    "react": "React"
  },
  module: {
    loaders: [
    {test: /\.(js|jsx)$/, loader: "jsx-loader"}
    ]
  }
};
