require('dotenv').config()
const express =  require('express');
const app = express();
const userRoutes = require('./routes/user.routes')
const morgan = require('morgan')
const mongoose = require('mongoose')
const port = process.env.PORT
const uri = process.env.MONGO_URI

app.use(morgan('dev'))
app.use(express.urlencoded({extended:true}))
app.use(express.json()) 

mongoose
.connect(uri)
.then(()=> console.log(`Database Conection SuccessFully...`))
.catch(err=>console.log(err))

app.get('/',(req,res)=>{
    res.send('welcome to server')
})

app.use('/',userRoutes)

app.listen(port, ()=>{
    console.log('server start at http://localhost:3333');
})