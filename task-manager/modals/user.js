const mongoose=require("mongoose")
const validator=require("validator")

const User=mongoose.model('User',{
    name:{
        type: String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        trim:true,
        validate(value){
            if(!validator.isByteLength(value,{min:6})){
                throw new Error("Password field should be 6 field long.")
            }else if(validator.equals(value.toLowerCase(),'password')){
                throw new Error('Password cannot contain "Password"')
            }
        }
    },
    email:{
        type: String,
        required: true,
        trim:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is invalid")
            }
        }
    },
    age:{
        type: Number ,
        default:0,
        validate(value){
            if(value<0){
                throw new Error('Age must be a positive number')
            }
        }
    }
})

module.exports=User