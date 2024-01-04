import express from 'express'
import userModel from '../models/userModel.js';
import quoteModel from '../models/quoteModel.js'
const router = express.Router();
import fs from 'fs'
export const contactController = async  (req,res) => {
    const {name , email , phone , messege} = req.body
    try {
        if(!name || !email  ||!phone ){
            res.status(404).send({
                messege:"plz filled this filled"
            }) }
        
            
        const user  = await new userModel({
            name,
            email,
            phone,
            messege

        }).save()
        res.status(201).send({
            success: true,
            message: "respond send sucessfully",
            user,
          });
    } catch (error) {
    res.status(500).send({
        success: false,
        message: "User not contact",
        error,
      });}

}

export const  quoteController = async(req,res ) => {
 try {
    const {buisnessName , firstName ,lastName,email , phone , quantity,dimension,typeOfPaper,
        paperWeight,paperColor,finish,colorOption,numberOfSides,bindery,notes } = req.fields
        const { file } = req.files;
      
    switch(true){
        case !buisnessName:
            return res.status(505).send({error:"buisnessName is required"})
            case !firstName:
            return res.status(505).send({error:"name is required"})
            case !lastName:
            return res.status(505).send({error:"name is required"})
            case !email:
            return res.status(505).send({error:"email is required"})
            case !phone:
            return res.status(505).send({error:"phone is required"})
            // case !quantity:
            // return res.status(505).send({error:"quantity is required"})
            // case !dimension:
            // return res.status(505).send({error:"dimension is required"})
            // case !typeOfPaper:
            // return res.status(505).send({error:"typeOfPaper is required"})
            // case !paperColor:
            // return res.status(505).send({error:"paperColor is required"})      
            case !file:
            return res.status(505).send({error:"file is required"})        
    }
      
  
    const quote  = await quoteModel({...req.fields})
    console.log(quote)
    if(file){
        quote.file.data = fs.readFileSync(file.path)
        quote.file.contentType = file.type
    }
    await quote.save()
    res.status(201).send({
        message: "User contact Successfully",
        success: true,  
        quote,  
      });



 } catch (error) {
    console.log(error)
    res.send({success:'false',
     error
   })
 }
} 
