export default function LoginPage() {
  return (
    <main style={{maxWidth:520, margin:"30px auto", background:"#fff", padding:28, borderRadius:24}}>
      <h1>Login</h1>
      <p>Email + Google login scaffold is ready.</p>
      <form style={{display:"grid", gap:12}}>
        <input placeholder="Email" style={{padding:14, borderRadius:12, border:"1px solid #c9ddd3"}} />
        <input placeholder="Password" type="password" style={{padding:14, borderRadius:12, border:"1px solid #c9ddd3"}} />
        <button type="button" style={{padding:14, borderRadius:12, background:"#1f9658", color:"#fff", border:"none"}}>Login</button>
        <button type="button" style={{padding:14, borderRadius:12, background:"#fff", color:"#174f3f", border:"1px solid #c9ddd3"}}>Continue with Google</button>
      </form>
    </main>
  );
}
