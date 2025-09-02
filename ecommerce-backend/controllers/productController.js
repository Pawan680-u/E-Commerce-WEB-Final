import { createProduct, getProducts } from "../services/productService.js"; 
export const addProduct = async (req, res) => { 
try { 
const product = await createProduct(req.body); 
res.status(201).json(product); 
} catch (err) { 
res.status(400).json({ error: err.message }); 
} 
}; 
export const listProducts = async (req, res) => { 
const products = await getProducts(); 
res.json(products); 
};