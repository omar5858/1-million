"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [resetLoading, setResetLoading] = useState(false);

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setMessage(error.message);
      return;
    }

    setMessage("Login successful! Welcome to 1 MILLION.");
  }

  async function handleResetPassword() {
    if (!email) {
      setMessage("Please enter your email first.");
      return;
    }

    setResetLoading(true);
    setMessage("");

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    setResetLoading(false);

    if (error) {
      setMessage(error.message);
      return;
    }

    setMessage("Password reset email sent. Check your Gmail.");
  }

  return (
    <main className="authPage">
      <div className="authBox">

        <a href="/" className="logo">
          <span className="logoBox">1</span>
          <span>MILLION</span>
        </a>

        <h1>Welcome back</h1>

        <p>Log in to continue to your 1 MILLION account.</p>

        <form onSubmit={handleLogin}>

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
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <p className="authFooter">
            <button
              type="button"
              onClick={handleResetPassword}
              disabled={resetLoading}
              style={{
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              {resetLoading ? "Sending..." : "Forgot password?"}
            </button>
          </p>

          <button
            type="submit"
            className="mainButton"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Log in"}
          </button>

        </form>

        {message && (
          <p className="authFooter">
            {message}
          </p>
        )}

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
