import Order from "../models/orderModel.js"; 
export const createOrder = async (data) => { 
return await Order.create(data); 
}; 
export const getOrders = async () => { 
return await Order.find().populate("user products"); 
}; 