import Link from "next/link";
import { siteConfig } from "@/lib/config";

export function Footer() {
  return (
    <footer style={{marginTop:40, padding:"24px 0", color:"#3f6d5d"}}>
      <div style={{display:"flex", justifyContent:"space-between", gap:20, flexWrap:"wrap"}}>
        <div>
          <strong>{siteConfig.name}</strong>
          <div>Support WhatsApp: {siteConfig.supportWhatsapp}</div>
          <div>Telegram: {siteConfig.supportTelegram}</div>
          <div>Email: {siteConfig.supportEmail}</div>
        </div>
        <div style={{display:"flex", gap:16}}>
          <Link href="/terms">Terms</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/refund-policy">Refund Policy</Link>
        </div>
      </div>
    </footer>
  );
}
