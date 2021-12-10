const mysql = require('mysql')

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'library'
})


// function connectionDB() {
//     connection.connect((err) => {
//         if(err) {
//             throw err
//         } else {
//             console.log('CONNECTION SUCCESS!')
//         }
//     })

//     // connection.end()
// }


module.exports = connection
