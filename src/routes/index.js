const express = require('express')
//routes
const routerBooks = require('./books.route')


function routerApi(app) {
    const router = express.Router()

    app.use('/api/v1', router)
    router.use('/books',routerBooks)
}


module.exports = routerApi
