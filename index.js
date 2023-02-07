const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const log = (...args) => console.log(
    (new Date()).toJSON(),
    args.map(
        (item) => typeof item === "object" ? JSON.stringify(item) : item).join(", "))

const reqInfos = (req) => {
    const { method, url, headers, query, body, path } = req;
    return { method, url, headers, query, body, path }
}

app.all('*', (req, res) => {
    const meta = reqInfos(req)
    log(meta)
    res.send(`you said: ${meta.method} ${meta.url}`)
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
