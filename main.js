import express from 'express';
import router from './routes/movies.route.js'; 
import connectDB from './lib/db.js';


// connect db 
connectDB()

const app = express();
const port = 3000;
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) => {
    res.json({ msg: "hello" });
});

app.use('/movies', router);

app.listen(port, () => {
    console.log(`The server is running at http://localhost:${port}`);
});
