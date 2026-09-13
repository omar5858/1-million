"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

type Deposit = {
  id: string;
  user_id: string;
  amount: number;
  status: string;
  created_at: string;
};

export default function AdminPage() {
  const [deposits, setDeposits] = useState<Deposit[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  async function loadDeposits() {
    setLoading(true);

    const { data, error } = await supabase
      .from("deposits")
      .select("id, user_id, amount, status, created_at")
      .order("created_at", { ascending: false });

    if (error) {
      setMessage("Could not load deposit requests.");
      setLoading(false);
      return;
    }

    setDeposits(data || []);
    setLoading(false);
  }

  async function updateStatus(id: string, status: "approved" | "rejected") {
    setMessage("");

    const { error } = await supabase
      .from("deposits")
      .update({
        status,
        reviewed_at: new Date().toISOString(),
      })
      .eq("id", id);

    if (error) {
      setMessage("Could not update the request.");
      return;
    }

    setMessage(
      status === "approved"
        ? "Deposit request approved."
        : "Deposit request rejected."
    );

    loadDeposits();
  }

  useEffect(() => {
    loadDeposits();
  }, []);

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
          maxWidth: "900px",
          margin: "0 auto",
          paddingTop: "30px",
        }}
      >
        <h1 style={{ fontSize: "32px", marginBottom: "8px" }}>
          Admin Dashboard
        </h1>

        <p style={{ color: "#999", marginBottom: "30px" }}>
          Demo deposit request management
        </p>

        {message && (
          <div
            style={{
              background: "#202020",
              border: "1px solid #333",
              padding: "14px",
              borderRadius: "10px",
              marginBottom: "20px",
              color: "#ddd",
            }}
          >
            {message}
          </div>
        )}

        {loading ? (
          <p style={{ color: "#aaa" }}>Loading requests...</p>
        ) : deposits.length === 0 ? (
          <div
            style={{
              background: "#151515",
              border: "1px solid #292929",
              borderRadius: "16px",
              padding: "25px",
              color: "#999",
            }}
          >
            No deposit requests found.
          </div>
        ) : (
          <div style={{ display: "grid", gap: "15px" }}>
            {deposits.map((deposit) => (
              <div
                key={deposit.id}
                style={{
                  background: "#151515",
                  border: "1px solid #292929",
                  borderRadius: "16px",
                  padding: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "15px",
                    flexWrap: "wrap",
                    marginBottom: "15px",
                  }}
                >
                  <div>
                    <div style={{ color: "#888", fontSize: "13px" }}>
                      User ID
                    </div>

                    <div
                      style={{
                        marginTop: "5px",
                        wordBreak: "break-all",
                      }}
                    >
                      {deposit.user_id}
                    </div>
                  </div>

                  <div>
                    <div style={{ color: "#888", fontSize: "13px" }}>
                      Amount
                    </div>

                    <div
                      style={{
                        marginTop: "5px",
                        fontSize: "22px",
                        fontWeight: "700",
                      }}
                    >
                      {deposit.amount}
                    </div>
                  </div>

                  <div>
                    <div style={{ color: "#888", fontSize: "13px" }}>
                      Status
                    </div>

                    <div style={{ marginTop: "5px" }}>
                      {deposit.status}
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    color: "#777",
                    fontSize: "12px",
                    marginBottom: "18px",
                  }}
                >
                  {new Date(deposit.created_at).toLocaleString()}
                </div>

                {deposit.status === "pending" && (
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      flexWrap: "wrap",
                    }}
                  >
                    <button
                      onClick={() => updateStatus(deposit.id, "approved")}
                      style={{
                        border: "none",
                        borderRadius: "9px",
                        padding: "12px 20px",
                        background: "#fff",
                        color: "#000",
                        fontWeight: "700",
                        cursor: "pointer",
                      }}
                    >
                      Approve
                    </button>

                    <button
                      onClick={() => updateStatus(deposit.id, "rejected")}
                      style={{
                        border: "1px solid #444",
                        borderRadius: "9px",
                        padding: "12px 20px",
                        background: "#222",
                        color: "#fff",
                        fontWeight: "700",
                        cursor: "pointer",
                      }}
                    >
                      Reject
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
      }
