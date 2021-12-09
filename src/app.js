const express = require("express")



//inizializations
const app = express()

//settings
app.set('port', process.env.PORT || 5005)


//routes
app.get('/', (req, res) => {
    res.send('hi there')
})


module.exports = app
