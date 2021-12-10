const express = require("express")
//routes
const routerApi = require("./routes")


//inizializations
const app = express()

//middlewares
app.use(express.json())

//settings
app.set('port', process.env.PORT || 5005)

routerApi(app)


//routes
app.get('/', (req, res) => {
    res.send('hi there')
})


module.exports = app
