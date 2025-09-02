import { body } from "express-validator"; 
export const orderValidator = [ 
body("user").notEmpty().withMessage("User ID is required"), 
body("products").isArray({ min: 1 }).withMessage("At least one product required"), 
body("totalPrice").isNumeric().withMessage("Total price must be a number") 
];