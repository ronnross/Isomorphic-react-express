module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  entry: {
    HelloWorld: "./elements/HelloWorld.jsx"
  },
  output: {
    libraryTarget: "var",
    library: "examples",
    path: './public/build',
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
