import api from './api.js'


export const registerUser = async (user) => {
const res = await api.post('/users', user)
return res.data
}


export const listUsers = async () => {
const res = await api.get('/users')
return res.data
}