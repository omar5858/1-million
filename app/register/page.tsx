export default function RegisterPage() {
  return (
    <main className="authPage">
      <div className="authBox">
        <a href="/" className="logo">
          <span className="logoBox">1</span>
          <span>MILLION</span>
        </a>

        <h1>Create account</h1>

        <p>Join 1 MILLION and get ready for the next level.</p>

        <form>
          <label>Full name</label>
          <input
            type="text"
            placeholder="Enter your name"
            required
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Create a password"
            required
          />

          <button type="submit" className="mainButton">
            Create account
          </button>
        </form>

        <p className="authFooter">
          Already have an account?{" "}
          <a href="/login">Log in</a>
        </p>
      </div>
    </main>
  );
}
