"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";

export default function DepositPage() {
  const router = useRouter();

  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function submitDeposit(e: React.FormEvent) {
    e.preventDefault();

    setMessage("");

    const value = Number(amount);

    if (!value || value <= 0) {
      setMessage("Please enter a valid amount.");
      return;
    }

    setLoading(true);

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      router.replace("/login");
      return;
    }

    const { error } = await supabase.from("deposits").insert({
      user_id: user.id,
      amount: value,
      status: "pending",
    });

    setLoading(false);

    if (error) {
      setMessage("Something went wrong. Please try again.");
      return;
    }

    setMessage(
      "Your deposit request has been submitted and is waiting for review."
    );

    setAmount("");
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#080808",
        color: "#fff",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "550px",
          margin: "0 auto",
          paddingTop: "30px",
        }}
      >
        <button
          onClick={() => router.push("/dashboard")}
          style={{
            background: "transparent",
            color: "#aaa",
            border: "none",
            cursor: "pointer",
            fontSize: "14px",
            marginBottom: "20px",
          }}
        >
          ← Back to Dashboard
        </button>

        <div
          style={{
            background: "#151515",
            border: "1px solid #292929",
            borderRadius: "20px",
            padding: "30px",
            boxSizing: "border-box",
          }}
        >
          <h1
            style={{
              margin: "0 0 10px",
              fontSize: "32px",
            }}
          >
            Deposit
          </h1>

          <p
            style={{
              color: "#999",
              lineHeight: "1.6",
              marginBottom: "25px",
            }}
          >
            Enter the amount you want to add to your demo balance.
          </p>

          <form onSubmit={submitDeposit}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                color: "#bbb",
                fontSize: "14px",
              }}
            >
              Amount
            </label>

            <input
              type="number"
              min="1"
              step="0.01"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              style={{
                width: "100%",
                boxSizing: "border-box",
                background: "#0d0d0d",
                border: "1px solid #333",
                borderRadius: "10px",
                padding: "14px",
                color: "#fff",
                fontSize: "16px",
                outline: "none",
                marginBottom: "18px",
              }}
            />

            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                border: "none",
                borderRadius: "10px",
                padding: "14px",
                background: loading ? "#777" : "#fff",
                color: "#000",
                fontSize: "15px",
                fontWeight: "700",
                cursor: loading ? "default" : "pointer",
              }}
            >
              {loading ? "Submitting..." : "Submit Deposit"}
            </button>
          </form>

          {message && (
            <div
              style={{
                marginTop: "20px",
                padding: "14px",
                borderRadius: "10px",
                background: "#202020",
                color: "#ddd",
                fontSize: "14px",
                lineHeight: "1.5",
              }}
            >
              {message}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
