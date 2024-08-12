const express =require('express')
const router=express.Router()

// CRUD functions
// r -
router.get('/',(req,res)=>{
    res.send("get all res")
})

//c -
router.post('/',(req,res)=>{
    res.send("get all res for post")

})

// u
router.put('/:id',(req,res)=>{
    res.send("get all res for updatae")

})

//d
router.delete('/:id',(req,res)=>{
    res.send("get all res for del")

})

module.exports = router;