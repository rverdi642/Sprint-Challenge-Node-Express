const express = require('express')
router = express.Router()
db = require('../helpers/actionModel')

router.get('/', (req, res) => {
    db
        .get()
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
})

router.get('/:id', (req, res) => {
    let { id } = req.params
    if (id) {
        db
            .get(id)
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                res.status(500).json({ error: err })
            })
    } else {
        res.status(400).json({ error: "Please include an ID" })
    }
})

router.post('/', (req, res) => {
    let { project_id, description, notes } = req.body
    if (project_id === undefined || description === undefined || notes === undefined) {
        res.status(400).json({ error: "Please complete the project data" })
    }
    db
        .insert({ project_id: project_id, description: description, notes: notes })
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.status(500).json({ error: "a database error occured, please try again later" })
        })
})

router.delete('/:id', (req, res) => {
    let { id } = req.params
    console.log("fire", id)
    db
        .get(id)
        .then(result => {
            db.remove(id)
                .then(count => {
                    res.json(result)
                })
                .catch(err => {
                    res.status(500).json({ error: "a database error occured, please try again later" })
                })
        })
        .catch(err => {
            res.status(500).json({ error: "a database error occured, please try again later" })
        })
})

router.put('/:id', (req, res) => {
    let { project_id, description, completed, notes } = req.body
    let { id } = req.params
    if (project_id === undefined || description === undefined || completed === undefined || notes === undefined) {
        res.status(400).json({ error: "Please complete the project data" })
    }
    db
        .update(id, { project_id: project_id, description: description, notes: notes, completed: completed })
        .then(result => {
            result === null ? res.status(404).json({ error: "Resource was not found" }) : res.json(result)
        })
        .catch(err => {
            res.status(500).json({ error: "a database error occured, please try again later" })
        })
})

module.exports = router;
