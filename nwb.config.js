module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'Jn6nimmtCard',
      externals: {
        react: 'React'
      }
    }
  }
}
