type Item = { country: string; stock: string; price: string };

export function PriceTable({ title, items }: { title: string; items: Item[] }) {
  return (
    <section style={{background:"#fff", borderRadius:24, padding:24, boxShadow:"0 10px 30px rgba(0,0,0,.05)"}}>
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", gap:16, marginBottom:16}}>
        <div>
          <h2 style={{margin:0, color:"#165c46"}}>{title}</h2>
          <p style={{margin:"8px 0 0", color:"#5f7e73"}}>WhatsApp-focused country pricing in PKR</p>
        </div>
      </div>
      <div style={{display:"grid", gap:12}}>
        {items.map((item) => (
          <div key={item.country} style={{display:"grid", gridTemplateColumns:"1.2fr 1fr auto", gap:12, alignItems:"center", padding:16, border:"1px solid #d9e7df", borderRadius:18}}>
            <div>
              <div style={{fontWeight:700, color:"#174f3f"}}>{item.country}</div>
              <div style={{color:"#6f8f83"}}>{item.stock}</div>
            </div>
            <div style={{fontWeight:700, color:"#1f8f5a"}}>{item.price}</div>
            <button style={{background:"#f39a17", color:"#fff", border:"none", borderRadius:14, padding:"10px 18px", fontWeight:700}}>Buy</button>
          </div>
        ))}
      </div>
    </section>
  );
}
