const express=require('express')
const app=express()
const dbConnect=require('./dbConnect')
app.use(express.json())
const port=5000
const userRoute=require('./routes/userRoute')

app.use('/api/user/' ,userRoute)

app.get('/',(req,res)=>res.send("hello world"))
app.listen(port,()=>console.log(`Example app listening on port ${port}!`))
