const express=require('express')
const router=require('./routes/movies.route')
const app=express()
const port=3000
app.get('/',(req,res)=>{
    res.json({msg :"hello"})
})

app.use('/movies',router)

app.listen(port,()=>{
    console.log(`the server is running http://localhost:${port}`);
    
})