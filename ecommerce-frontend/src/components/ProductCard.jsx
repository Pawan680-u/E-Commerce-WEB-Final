export default function ProductCard({ product, onAdd }) {
return (
<div className="card">
<h3 style={{ margin: '0 0 8px' }}>{product.name}</h3>
<div className="muted" style={{ marginBottom: 8 }}>
{product.description || 'No description'}
</div>
<div className="row" style={{ justifyContent: 'space-between' }}>
<strong>${Number(product.price).toFixed(2)}</strong>
<button className="btn" onClick={() => onAdd?.(product)}>Add to cart</button>
</div>
</div>
)
}