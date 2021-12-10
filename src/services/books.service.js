//db
const connection = require('../db/mysql')


class BooksService {

    getAll() {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM books`, (err, results) => {
                if(err) reject(err);
                else resolve(results)
            })
        })
    }

    getById(id) {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM books WHERE id =${id}`, (err, results) => {
                if(err) reject(err);
                else resolve(results)
            })
        })
    }

    create(title, author, edition) {
        return new Promise((resolve, reject) => {
            connection.query(`INSERT INTO books (title, author, edition) VALUES (?, ?, ?)`,
                [title, author, edition], (err, results) => {
                    if(err) reject(err)
                    else resolve(results)
            })
        })
    }

    update(id, title, author, edition) {
        return new Promise((resolve, reject) => {
            connection.query(
                `UPDATE books SET title = ?, author = ?, edition = ? WHERE id = ?`,[title,author, edition, id],
                (err, results) => {
                    if(err) reject(err)
                    else resolve()
            })
        })
    }

    delete(id) {
        return new Promise((resolve, reject) => {
            connection.query(`DELETE from books WHERE id= ${id}`,
            (err) => {
                if(err) reject(err)
                else resolve()
            })
        })
    }
}


module.exports = BooksService
