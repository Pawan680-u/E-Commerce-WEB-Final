import api from './api.js'


export const createOrder = async (order) => {
const res = await api.post('/orders', order)
return res.data
}


export const getOrders = async () => {
const res = await api.get('/orders')
return res.data
}