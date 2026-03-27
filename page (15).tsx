export default function RegisterPage() {
  return (
    <main style={{maxWidth:520, margin:"30px auto", background:"#fff", padding:28, borderRadius:24}}>
      <h1>Create account</h1>
      <p>Email verification and Google auth are planned into this starter.</p>
      <form style={{display:"grid", gap:12}}>
        <input placeholder="Full Name" style={{padding:14, borderRadius:12, border:"1px solid #c9ddd3"}} />
        <input placeholder="Email" style={{padding:14, borderRadius:12, border:"1px solid #c9ddd3"}} />
        <input placeholder="Password" type="password" style={{padding:14, borderRadius:12, border:"1px solid #c9ddd3"}} />
        <button type="button" style={{padding:14, borderRadius:12, background:"#1f9658", color:"#fff", border:"none"}}>Create Account</button>
      </form>
    </main>
  );
}
