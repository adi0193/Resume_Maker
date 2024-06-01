const { default: mongoose } = require('mongoose')
const mongooose=require('mongoose')

const userSchema=new mongoose.Schema({
    username:{type:String,required:true},
    password:{type:String,required:true},
    firstName:{type:String,default:''},
    lastName:{type:String,default:''},
    email:{type:String,default:''},
    mobileNumber:{type:String,default:''},
    portfolio:{type:String,default:''}, 
    carreerObjective:{type:String,default:''},
    address:{type:String,default:''},
    education:{type:Array,default:[]},
    skills:{type:Array,default:[]},
    experience:{type:Array,default:[]},
    projects:{type:Array,default:[]},

},{
    timestamps:true
})

const userModel=mongooose.model('users',userSchema)

module.exports=userModel