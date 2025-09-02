export default function Home() {
return (
<div className="card" style={{ marginTop: 16 }}>
<h2>Welcome to E‑commerce Store</h2>
<p className="muted">Browse products, add to cart, and place orders against your backend API.</p>
<ul>
<li>Go to <strong>Products</strong> to fetch from <code>/api/products</code>.</li>
<li>Use <strong>Cart</strong> to review items and checkout.</li>
<li>Use <strong>Orders</strong> to view or place orders (needs a valid <code>user</code> id).</li>
</ul>
</div>
)
}