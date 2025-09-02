import { createOrder, getOrders } from "../services/orderService.js"; 
export const placeOrder = async (req, res) => { 
try { 
const order = await createOrder(req.body); 
res.status(201).json(order); 
} catch (err) { 
res.status(400).json({ error: err.message }); 
} 
}; 
export const listOrders = async (req, res) => { 
const orders = await getOrders(); 
res.json(orders); 
}; 