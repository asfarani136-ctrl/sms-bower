import Link from "next/link";
import { siteConfig } from "@/lib/config";

export function Header() {
  return (
    <header style={{background:"#d9eadf", borderRadius:20, padding:"18px 24px", marginBottom:24}}>
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", gap:16, flexWrap:"wrap"}}>
        <div>
          <div style={{fontSize:28, fontWeight:800, color:"#165c46"}}>{siteConfig.name}</div>
          <div style={{color:"#4f7d6e"}}>Clean virtual SMS activations in PKR</div>
        </div>
        <nav style={{display:"flex", gap:18, flexWrap:"wrap"}}>
          <Link href="/">Home</Link>
          <Link href="/dashboard/buy">Buy Number</Link>
          <Link href="/dashboard/orders">Orders</Link>
          <Link href="/dashboard/wallet">Wallet</Link>
          <Link href="/admin/payments">Admin</Link>
        </nav>
      </div>
    </header>
  );
}
