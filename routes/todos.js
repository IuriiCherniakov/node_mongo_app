const {Router} = require('express')
const router = Router()
const Todo = require('../models/Todo')

router.get('/', async (req, res) => {
    const todos = await Todo.find({})
    res.render('index', {
        title: 'Todo list',
        isIndex: true,
        todos
    })
})

router.get('/create', (req, res) => {
    res.render('create', {
        title: 'Create todo',
        isCreate: true
    })
})

module.exports = router
