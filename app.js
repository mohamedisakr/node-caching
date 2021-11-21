const express = require("express")
const cors = require("cors")
const {get} = require("./object-cache")

const app = express()
app.use(cors())
app.use(express.json())

const cache = {}
const key = "home.html"

app.get(`/nocache/${key}`, (req, res) => {
  get(key, (page) => res.status(200).send(page))
})

app.get(`/withcache/${key}`, (req, res) => {
  if (key in cache) {
    return res.status(200).send(cache[key])
  }

  get(key, (page) => {
    cache[key] = page
    return res.status(200).send(page)
  })
})

module.exports = app
