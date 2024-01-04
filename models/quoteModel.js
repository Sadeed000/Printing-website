import mongoose, { model } from 'mongoose';

const quoteSchema = new mongoose.Schema({
    buisnessName:{
        type:String,
        required:true,
},
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    
    email:{
        type:String,
        required:true,

    },
    phone:{
        type:Number,
        required:true
    },
//     quantity:{
//         type:Number,
//         required:true
//     },

//     dimension:{
//         type:Number,
//         required:true
//     },
//     typeOfPaper:{
//         type:String
//     },
//     paperWeight:{
//         type:String
//     },
//     paperColor:{
//         type:String,
//         required:true
//  },
//    finish:{
//     type:String
//    },
   
//    colorOption:{
//     type:String,

//    },

//    numberOfSides:{
//     type:String,
//     required:true
//    },

//    bindery:{
//     type:String,
//     required:true
//    },
//  notes:{
//     type:String
//    },

  file :{
    data:Buffer,
    contentType: String,
  },

},{timestamps:true})
 

export default  mongoose.model('quote',quoteSchema)
