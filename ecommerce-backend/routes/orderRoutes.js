import express from "express"; 
import { placeOrder, listOrders } from "../controllers/orderController.js"; 
import { orderValidator } from "../validators/orderValidator.js"; 
import { validationResult } from "express-validator"; 
const router = express.Router(); 
router.post("/", orderValidator, (req, res, next) => { 
const errors = validationResult(req); 
if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() 
}); 
next(); 
}, placeOrder); 
router.get("/", listOrders); 
export default router;