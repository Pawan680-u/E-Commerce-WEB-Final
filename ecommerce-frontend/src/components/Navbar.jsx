import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'


export default function Navbar() {
const { pathname } = useLocation()
const [count, setCount] = useState(0)


useEffect(() => {
const sync = () => {
const cart = JSON.parse(localStorage.getItem('cart') || '[]')
setCount(cart.reduce((a, b) => a + (b.qty || 1), 0))
}
sync()
window.addEventListener('storage', sync)
return () => window.removeEventListener('storage', sync)
}, [pathname])


const Active = ({ to, children }) => (
<Link className="link" style={{
background: pathname === to ? '#111a33' : 'transparent',
fontWeight: pathname === to ? 700 : 500
}} to={to}>{children}</Link>
)


return (
<div className="nav">
<div className="nav-inner container">
<Link to="/" className="brand">E‑Shop</Link>
<div className="spacer" />
<Active to="/">Home</Active>
<Active to="/products">Products</Active>
<Active to="/orders">Orders</Active>
<Active to="/cart">Cart <span className="badge">{count}</span></Active>
</div>
</div>
)
}