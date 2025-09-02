import { body } from "express-validator"; 
export const productValidator = [ 
body("name").notEmpty().withMessage("Product name is required"), 
body("price").isNumeric().withMessage("Price must be a number") 
]; 