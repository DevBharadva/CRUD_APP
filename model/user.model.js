const mongoose = require('mongoose');


const userShcema = mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    mobileNo:{
        type:Number
    },
    isDelete:{
        type:Boolean,
        default:false
    }
})

module.exports  = mongoose.model('user',userShcema);