import express from "express"; 
import { registerUser, listUsers } from "../controllers/userController.js"; 
import { userValidator } from "../validators/userValidator.js"; 
import { validationResult } from "express-validator"; 
const router = express.Router(); 
router.post("/", userValidator, (req, res, next) => { 
const errors = validationResult(req); 
if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() 
}); 
next(); 
}, registerUser); 
router.get("/", listUsers); 
export default router; 