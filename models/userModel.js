import mongoose from 'mongoose'

const userSchema =new mongoose.Schema({
name:{
    type:String,
    required:true,
},
email:{
 type:String,
 requied:true,
},
phone:{
    type:Number,
    requied:true
},

address:{
    type:String,
},
messege:{
 type:{}
}
} , { timestamps: true }

)

export default mongoose.model('user',userSchema)
