export default function LoginPage() {
  return (
    <main className="authPage">
      <div className="authBox">
        <a href="/" className="logo">
          <span className="logoBox">1</span>
          <span>MILLION</span>
        </a>

        <h1>Welcome back</h1>

        <p>
          Log in to continue to your 1 MILLION account.
        </p>

        <form>
          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            required
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            required
          />

          <button type="submit" className="mainButton">
            Log in
          </button>
        </form>

        <p className="authFooter">
          Don't have an account?{" "}
          <a href="/register">Create account</a>
        </p>

        <p className="authFooter">
          <a href="/">← Back to 1 MILLION</a>
        </p>
      </div>
    </main>
  );
}
