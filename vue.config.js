module.exports = {
  devServer: {
    proxy: {
      "/fortune": {
        target: "http://localhost:3000"
      }
    }
  }
}