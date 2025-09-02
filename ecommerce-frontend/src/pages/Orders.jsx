import { useEffect, useMemo, useState } from 'react'
useEffect(() => { loadOrders() }, [])


const place = async () => {
if (!userId) return alert('Enter a valid user id from your DB')
if (!cart.length) return alert('Cart is empty')
try {
const payload = {
user: userId,
products: cart.map(i => i._id),
totalPrice: Number(totalPrice.toFixed(2))
}
await createOrder(payload)
alert('Order placed!')
localStorage.removeItem('cart')
await loadOrders()
} catch (e) {
alert(e?.response?.data?.error || e.message)
}
}


return (
<div style={{ marginTop: 16 }}>
<div className="card" style={{ marginBottom: 16 }}>
<h2>Place Order</h2>
<div className="row">
<input className="input" placeholder="Enter User ID (Mongo ObjectId)" value={userId} onChange={e => setUserId(e.target.value)} />
<button className="btn" onClick={place}>Place Order (${totalPrice.toFixed(2)})</button>
</div>
<div className="muted" style={{ marginTop: 8 }}>Tip: create a user via POST <code>/api/users</code> in your backend and paste the returned <code>_id</code> here.</div>
</div>


<div className="card">
<div className="row" style={{ justifyContent: 'space-between' }}>
<h2>Orders</h2>
<button className="btn" onClick={loadOrders}>Refresh</button>
</div>
{loading ? <Loader /> : error ? (
<div style={{ color: 'tomato' }}>Error: {error}</div>
) : (
<table className="table">
<thead>
<tr>
<th>Order ID</th>
<th>User</th>
<th>Products</th>
<th>Total</th>
<th>Created</th>
</tr>
</thead>
<tbody>
{orders.map(o => (
<tr key={o._id}>
<td>{o._id}</td>
<td>{typeof o.user === 'object' ? o.user?.email || o.user?._id : o.user}</td>
<td>{(o.products || []).map(p => (typeof p === 'object' ? p.name : p)).join(', ')}</td>
<td>${Number(o.totalPrice).toFixed(2)}</td>
<td>{new Date(o.createdAt || o.updatedAt || Date.now()).toLocaleString()}</td>
</tr>
))}
</tbody>
</table>
)}
</div>
</div>
)
