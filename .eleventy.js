module.exports = (config) => {
  config.addPassthroughCopy("uploads")
  config.addPassthroughCopy("static")

  config.addFilter("money", function (value) {
    const formatter = new Intl.NumberFormat('en-US', { currency: 'USD', style: 'currency' })
    return formatter.format(value)
  })

  return {
    dir: {
      input: "src"
    }
  }
}
