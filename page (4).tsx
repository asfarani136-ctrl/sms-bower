import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PriceTable } from "@/components/PriceTable";
import { siteConfig } from "@/lib/config";

const items = [
  { country: "USA", stock: "16664 pcs", price: "PKR 286" },
  { country: "Canada", stock: "56145 pcs", price: "PKR 92" },
  { country: "UK", stock: "9860 pcs", price: "PKR 340" },
  { country: "Indonesia", stock: "14400 pcs", price: "PKR 145" },
  { country: "South Africa", stock: "9200 pcs", price: "PKR 210" },
  { country: "Thailand", stock: "8100 pcs", price: "PKR 170" },
  { country: "Saudia", stock: "6300 pcs", price: "PKR 260" },
  { country: "Philipine", stock: "7700 pcs", price: "PKR 155" },
  { country: "Netherland", stock: "4300 pcs", price: "PKR 298" }
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main style={{display:"grid", gap:24}}>
        <section style={{display:"grid", gridTemplateColumns:"1.2fr .8fr", gap:24}}>
          <div style={{background:"#1f9658", color:"#fff", borderRadius:32, padding:28}}>
            <div style={{display:"inline-block", background:"rgba(255,255,255,.15)", borderRadius:999, padding:"6px 12px", marginBottom:18}}>
              WhatsApp on top · PKR pricing · Live OTP popup
            </div>
            <h1 style={{fontSize:52, lineHeight:1.05, margin:"0 0 14px"}}>Buy virtual numbers in a clean SMSBower-style layout.</h1>
            <p style={{fontSize:18, lineHeight:1.7, maxWidth:700}}>
              {siteConfig.name} is built for a fast buy-number flow, admin-approved wallet deposits, popup OTP alerts with sound, and webhook-ready order updates.
            </p>
            <div style={{display:"flex", gap:12, flexWrap:"wrap", marginTop:20}}>
              <a href="/dashboard/buy" style={{background:"#f39a17", color:"#fff", padding:"14px 20px", borderRadius:16, textDecoration:"none", fontWeight:700}}>Start Buying</a>
              <a href="/dashboard/wallet" style={{background:"#fff", color:"#1f9658", padding:"14px 20px", borderRadius:16, textDecoration:"none", fontWeight:700}}>Add Balance</a>
            </div>
          </div>
          <div style={{background:"#fff", borderRadius:28, padding:24, boxShadow:"0 10px 30px rgba(0,0,0,.05)"}}>
            <h3 style={{marginTop:0}}>Manual Payment Methods</h3>
            <div style={{border:"1px solid #d9e7df", borderRadius:18, padding:16, marginBottom:12}}>
              <strong>SadaPay</strong>
              <div>Name: Nihayat Begum</div>
              <div>Number: 03439898333</div>
            </div>
            <div style={{border:"1px solid #d9e7df", borderRadius:18, padding:16, marginBottom:12}}>
              <strong>UPaisa</strong>
              <div>Name: Muhammad Faisal</div>
              <div>Number: 03334904751</div>
            </div>
            <div style={{background:"#fff5e8", color:"#8a5705", borderRadius:16, padding:14}}>
              Popup message after deposit submission: <strong>Your payment will be approved within 1 hour.</strong>
            </div>
          </div>
        </section>

        <PriceTable title="WhatsApp country prices" items={items} />
      </main>
      <Footer />
    </>
  );
}
