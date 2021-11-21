const objectCache = {
  ["home.html"]: `<h3>Node Simple Caching Strategies</h3>`,
}

const get = (key, callback) => {
  setTimeout(() => {
    callback(objectCache[key])
  }, 3000)
}

module.exports = {get}
