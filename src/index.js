//app
const app = require('./app')


app.listen(app.get('port'), () => {
    console.log(`server is listening in port: ${ app.get('port')} `)
})
