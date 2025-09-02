import { useEffect, useState } from 'react'
import { getProducts } from '../services/productService.js'
import ProductCard from '../components/ProductCard.jsx'
import Loader from '../components/Loader.jsx'


export default function Products() {
const [products, setProducts] = useState([])
const [loading, setLoading] = useState(true)
const [error, setError] = useState('')


useEffect(() => {
(async () => {
try {
const data = await getProducts()
setProducts(data)
} catch (e) {
setError(e?.response?.data?.error || e.message)
} finally {
setLoading(false)
}
})()
}, [])


const addToCart = (p) => {
const cart = JSON.parse(localStorage.getItem('cart') || '[]')
const idx = cart.findIndex(i => i._id === p._id)
if (idx >= 0) cart[idx].qty = (cart[idx].qty || 1) + 1
else cart.push({ ...p, qty: 1 })
localStorage.setItem('cart', JSON.stringify(cart))
// trigger navbar count update for other tabs
window.dispatchEvent(new StorageEvent('storage'))
alert('Added to cart')
}


if (loading) return <Loader />
if (error) return <div className="card" style={{ marginTop: 16, color: 'tomato' }}>Error: {error}</div>


return (
<div style={{ marginTop: 16 }}>
<div className="grid">
{products.map(p => (
<ProductCard key={p._id} product={p} onAdd={addToCart} />
))}
</div>
</div>
)
}