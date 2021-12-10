const express = require('express')
//services
const BooksService = require('../services/books.service')

//initializations
const service = new BooksService()
const router = express.Router()


//routes
router.get('/',async(req, res) => {
    try {
        const books = await service.getAll()

        res.status(200).json({
            data: books.map(item => Object.fromEntries( Object.entries(item))),
            count: books.length
        })
    } catch (error) {
        console.error(error.message)
        res.status(500).send(error.message)
    }
})

router.get('/:id',async(req, res) => {
    const { id } = req.params

    try {
        const book = await service.getById(id)

        if(!book.length) return res.status(400).json({ msg: `User id ${id} not exist`})

        res.status(200).json(book.map(item => Object.fromEntries(Object.entries(item))))
    } catch (error) {
        console.error(error.message)
        res.status(500).send(error.message)
    }
})

router.post('/', async (req, res) => {

    const { title, author, edition } = req.body

    if(!title || !author || !edition) {
        return res.status(400).json({
            msg: 'Please, introduce values'
        })
    }

    try {
        const book = await service.create(title, author, edition)
        res.status(201).json({
            idBook: book.insertId
        })

    } catch (error) {
        console.error(error.message)
        res.status(500).send(error.message)
    }
})

router.put('/:id', async (req, res) => {

    const { title, author, edition } = req.body
    const { id } = req.params

    if(!title || !author || !edition || !id) {
        return res.status(400).json({
            msg: 'Please, datos incorrects'
        })
    }

    try {
        await service.update(id, title, author, edition)
        res.status(200).send('Book updated')

    } catch (error) {
        console.error(error.message)
        res.status(500).send(error.message)
    }
})

router.delete('/:id', async (req, res) => {

    const { id } = req.params

    if(!id) return res.status(400).json({msg: 'Please, introduce a id'})

    try {
        await service.delete(id)
        res.status(200).send('Book deleted')

    } catch (error) {
        console.error(error.message)
        res.status(500).send(error.message)
    }
})


module.exports = router
