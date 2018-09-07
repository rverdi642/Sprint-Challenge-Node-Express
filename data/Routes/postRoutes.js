const express = require('express')
router = express.Router()
db = require('../helpers/projectModel')


router.get('/', (req, res) => {
    db
        .get()
        .then(result => {
            res.json(result)
        })
        .catch(err => console.log(err))
})

router.get('/:id', (req, res) => {
    let { id } = req.params
    db
        .get(id)
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.json({ errror: err })
        })
})

router.post('/', (req, res) => {
    let { name, description } = req.body
    db
        .insert({ name: name, description: description })
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.json({ error: err })
        })
})

router.put('/:id', (req, res) => {
    let { name, description, completed } = req.body
    let { id } = req.params
    db
        .update(id, { name: name, description: description, completed: completed })
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.status(500).json({ error: "a database error occured, please try again later" })
        })
})


module.exports = router