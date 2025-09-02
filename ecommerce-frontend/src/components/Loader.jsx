export default function Loader({ label = 'Loading...' }) {
return (
<div className="row" style={{ justifyContent: 'center', padding: 24 }}>
<div className="spinner" />
<div className="muted">{label}</div>
</div>
)
}