import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import Cart from './pages/Cart.jsx'
import Orders from './pages/Orders.jsx'


export default function App() {
return (
<BrowserRouter>
<Navbar />
<div className="container">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/products" element={<Products />} />
<Route path="/cart" element={<Cart />} />
<Route path="/orders" element={<Orders />} />
</Routes>
</div>
</BrowserRouter>
)
}