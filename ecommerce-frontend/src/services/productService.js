import api from './api.js'


export const getProducts = async () => {
const res = await api.get('/products')
return res.data
}


export const addProduct = async (product) => {
const res = await api.post('/products', product)
return res.data
}