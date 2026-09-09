"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleUpdatePassword(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.updateUser({
      password,
    });

    setLoading(false);

    if (error) {
      setMessage(error.message);
      return;
    }

    setMessage("Password updated successfully. You can now log in.");
  }

  return (
    <main className="authPage">
      <div className="authBox">

        <a href="/" className="logo">
          <span className="logoBox">1</span>
          <span>MILLION</span>
        </a>

        <h1>Reset password</h1>

        <p>Create a new password for your 1 MILLION account.</p>

        <form onSubmit={handleUpdatePassword}>

          <label>New password</label>

          <input
            type="password"
            placeholder="Enter your new password"
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
            {loading ? "Updating..." : "Update password"}
          </button>

        </form>

        {message && (
          <p className="authFooter">
            {message}
          </p>
        )}

        <p className="authFooter">
          <a href="/login">← Back to login</a>
        </p>

      </div>
    </main>
  );
}
