import User from "../models/userModel.js"; 
export const createUser = async (data) => { 
return await User.create(data); 
}; 
export const getUsers = async () => { 
return await User.find(); 
}; 