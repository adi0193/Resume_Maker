const mongoose=require('mongoose')

const URL="mongodb+srv://adi3000:Adi0193@cluster0.jzhdgm2.mongodb.net/"


 mongoose.connect(URL,{useUnifiedTopology:true , useNewUrlParser:true})

const connnection=mongoose.connection

connnection.on('connected', ()=>{
    console.log("Mongo DB connection succesfull")
})

connnection.on('erorr',(error)=>{
    console.log(error)
})