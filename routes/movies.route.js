const express =require('express')
const router=express.Router()
const movieIndex = require('../controllers/movie.controler')
const moviepost =require('../controllers/movie.controler')
const movieupdate =require('../controllers/movie.controler')
const moviedelete =require('../controllers/movie.controler')
// CRUD functions
// r -
router.get('/' ,movieIndex)

//c -
router.post('/',moviepost)

// u
router.put('/:id',movieupdate)

//d
router.delete('/:id',moviedelete)

module.exports = router;