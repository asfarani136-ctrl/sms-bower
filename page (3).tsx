import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MRFSMS",
  description: "Virtual SMS activations in PKR",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{margin:0, fontFamily:"Arial, sans-serif", background:"#eef5f0", color:"#174f3f"}}>
        <div style={{maxWidth:1400, margin:"0 auto", padding:16}}>{children}</div>
      </body>
    </html>
  );
}
