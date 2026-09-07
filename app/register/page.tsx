"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
        },
      },
    });

    setLoading(false);

    if (error) {
      setMessage(error.message);
      return;
    }

    setMessage(
      "Account created successfully. Check your email if confirmation is required."
    );
  }

  return (
    <main className="authPage">
      <div className="authBox">
        <a href="/" className="logo">
          <span className="logoBox">1</span>
          <span>MILLION</span>
        </a>

        <h1>Create account</h1>

        <p>Join 1 MILLION and get ready for the next level.</p>

        <form onSubmit={handleRegister}>
          <label>Full name</label>

          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
          />

          <button
            type="submit"
            className="mainButton"
            disabled={loading}
          >
            {loading ? "Creating account..." : "Create account"}
          </button>
        </form>

        {message && <p className="authFooter">{message}</p>}

        <p className="authFooter">
          Already have an account?{" "}
          <a href="/login">Log in</a>
        </p>

        <p className="authFooter">
          <a href="/">← Back to 1 MILLION</a>
        </p>
      </div>
    </main>
  );
}
