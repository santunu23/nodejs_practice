const mongoose=require("mongoose")
const validator=require("validator")

const Task= mongoose.model('tasks',{
    description:{
        type:String,
        required:true,
        trim: true,
        validate(value){
            if(!validator.isByteLength(value,{min:6})){
                throw new Error("Description field length more then 6.")
            }
        }
    },
    completed: {
        type:Boolean,
        required: true
    } 
})

module.exports=Task