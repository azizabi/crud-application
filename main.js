const express=require('express')
const app=express()
const port=3000
app.get('/',(req,res)=>{
    res.json({msg :"hello"})
})

// CRUD functions
// r -
app.get('/movies',(req,res)=>{})

//c -
app.post('/movies',(req,res)=>{})

// u
app.put('/movies/:id',(req,res)=>{})

//d
app.delete('/movies/:id',(req,res)=>{})

app.listen(port,()=>{
    console.log(`the server is running http://localhost:${port}`);
    
})