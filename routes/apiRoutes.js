const express = require('express');
const router = express.Router();
let db = require('../db/db.json')
const fs = require('fs')

router.get('/notes', (req, res) => {
    res.json(db)
})

router.post('/notes', (req, res) => {
    
db.push(req.body)
fs.writeFileSync('./db/db.json', JSON.stringify(db))
res.json(db)
})

module.exports = router;