const fs = require('fs')
const path = require('path')
const resolve = file => path.resolve(__dirname, file)
const express = require('express')
const createApp = require('./dist/vue-ssr-server-bundle.json')
const { createBundleRenderer } = require('vue-server-renderer')
const { JSDOM } = require('jsdom')

const renderer = createBundleRenderer(createApp, {
  baseDir: resolve('./dist'),
  template: fs.readFileSync(resolve('./src/skeleton.tmpl.html'), 'utf-8'),
  inject: false,
})

const app = express()

app.get('*', (req, res) => {
  res.setHeader('Content-type', 'text/html')

  console.log(`entry: ${req.url}`)
  const context = { url: req.url }

  renderer.renderToString(context, (err, html) => {
    res.end(html)
    // if (err) {
    //   if (err.code === 404) {
    //     res.status(404).end('Page not found')
    //   } else {
    //     res.status(500).end('Internal Server Error')
    //   }
    // } else {
    //   res.end(html)
    // }
  })
})

app.listen(3000, () => { console.log('isso ai') })
