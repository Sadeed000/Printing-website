import express from 'express'
import { contactController, quoteController } from '../controller/userController.js';
import formidable from "express-formidable";


const router = express.Router();
    

router.post("/contact", contactController);

router.post("/quote" , formidable(), quoteController)

export default router
