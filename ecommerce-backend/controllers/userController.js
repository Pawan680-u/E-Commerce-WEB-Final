import { createUser, getUsers } from "../services/userService.js"; 
export const registerUser = async (req, res) => { 
try { 
const user = await createUser(req.body); 
res.status(201).json(user); 
} catch (err) { 
res.status(400).json({ error: err.message }); 
} 
}; 
export const listUsers = async (req, res) => { 
const users = await getUsers(); 
res.json(users); 
}; 