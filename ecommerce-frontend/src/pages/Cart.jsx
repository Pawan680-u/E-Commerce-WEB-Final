import { useEffect, useMemo, useState } from "react";

export default function Cart() {
  const [items, setItems] = useState([]);

  // Load cart items from localStorage when component mounts
  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) {
      setItems(JSON.parse(stored));
    }
  }, []);

  // Save updated items to localStorage
  const save = (next) => {
    localStorage.setItem("cart", JSON.stringify(next));
    setItems(next);
    window.dispatchEvent(new StorageEvent("storage"));
  };

  const inc = (id) =>
    save(items.map((i) => (i._id === id ? { ...i, qty: (i.qty || 1) + 1 } : i)));

  const dec = (id) =>
    save(
      items.map((i) =>
        i._id === id ? { ...i, qty: Math.max(1, (i.qty || 1) - 1) } : i
      )
    );

  const removeItem = (id) => save(items.filter((i) => i._id !== id));

  const clear = () => save([]);

  const total = useMemo(
    () => items.reduce((s, i) => s + Number(i.price) * (i.qty || 1), 0),
    [items]
  );

  if (!items.length)
    return (
      <div className="card" style={{ marginTop: 16 }}>
        Your cart is empty.
      </div>
    );

  return (
    <div className="card" style={{ marginTop: 16 }}>
      <h2>Cart</h2>
      {items.map((i) => (
        <div
          key={i._id}
          className="row"
          style={{ justifyContent: "space-between" }}
        >
          <div>
            <strong>{i.name}</strong>
            <div className="muted">${Number(i.price).toFixed(2)}</div>
          </div>
          <div className="row">
            <button className="btn" onClick={() => dec(i._id)}>
              -
            </button>
            <div style={{ width: 40, textAlign: "center" }}>{i.qty || 1}</div>
            <button className="btn" onClick={() => inc(i._id)}>
              +
            </button>
          </div>
          <div>${(Number(i.price) * (i.qty || 1)).toFixed(2)}</div>
          <button className="btn" onClick={() => removeItem(i._id)}>
            Remove
          </button>
        </div>
      ))}
      <hr style={{ borderColor: "var(--border)" }} />
      <div className="row" style={{ justifyContent: "space-between" }}>
        <h3>Total</h3>
        <h3>${total.toFixed(2)}</h3>
      </div>
      <div className="row" style={{ justifyContent: "flex-end" }}>
        <button className="btn" onClick={clear}>
          Clear Cart
        </button>
      </div>
    </div>
  );
}
