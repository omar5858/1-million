"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";

export default function DashboardPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.replace("/login");
        return;
      }

      setEmail(user.email || "");

      setName(
        user.user_metadata?.full_name ||
          user.email?.split("@")[0] ||
          "Player"
      );

      setLoading(false);
    }

    checkUser();
  }, [router]);

  async function handleLogout() {
    await supabase.auth.signOut();
    router.replace("/login");
  }

  if (loading) {
    return (
      <main className="authPage">
        <div className="authBox">
          <h1>Loading...</h1>
        </div>
      </main>
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#080808",
        color: "#ffffff",
        padding: "20px",
      }}
    >
      <header
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 0 30px",
        }}
      >
        <a
          href="/"
          className="logo"
          style={{ textDecoration: "none" }}
        >
          <span className="logoBox">1</span>
          <span>MILLION</span>
        </a>

        <button
          onClick={handleLogout}
          className="mainButton"
          style={{
            padding: "10px 18px",
            cursor: "pointer",
          }}
        >
          Log out
        </button>
      </header>

      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            background:
              "linear-gradient(135deg, #171717, #0d0d0d)",
            border: "1px solid #292929",
            borderRadius: "20px",
            padding: "35px",
            marginBottom: "25px",
          }}
        >
          <p
            style={{
              margin: "0 0 8px",
              color: "#999",
              fontSize: "14px",
            }}
          >
            WELCOME BACK
          </p>

          <h1
            style={{
              fontSize: "38px",
              margin: "0 0 10px",
            }}
          >
            {name}
          </h1>

          <p style={{ color: "#aaa", margin: 0 }}>
            {email}
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "18px",
          }}
        >
          <div
            style={{
              background: "#151515",
              border: "1px solid #292929",
              borderRadius: "18px",
              padding: "25px",
            }}
          >
            <p style={{ color: "#888", margin: "0 0 10px" }}>
              BALANCE
            </p>
            <h2 style={{ margin: 0, fontSize: "30px" }}>
              $0.00
            </h2>
          </div>

          <div
            style={{
              background: "#151515",
              border: "1px solid #292929",
              borderRadius: "18px",
              padding: "25px",
            }}
          >
            <p style={{ color: "#888", margin: "0 0 10px" }}>
              TOTAL GAMES
            </p>
            <h2 style={{ margin: 0, fontSize: "30px" }}>
              0
            </h2>
          </div>

          <div
            style={{
              background: "#151515",
              border: "1px solid #292929",
              borderRadius: "18px",
              padding: "25px",
            }}
          >
            <p style={{ color: "#888", margin: "0 0 10px" }}>
              STATUS
            </p>
            <h2 style={{ margin: 0, fontSize: "24px" }}>
              Active
            </h2>
          </div>
        </div>

        <div
          style={{
            marginTop: "25px",
            background: "#151515",
            border: "1px solid #292929",
            borderRadius: "18px",
            padding: "30px",
          }}
        >
          <h2 style={{ marginTop: 0 }}>
            Your Dashboard
          </h2>

          <p style={{ color: "#999" }}>
            Your games, account activity, balance and
            profile information will appear here.
          </p>

          <button
            className="mainButton"
            style={{
              marginTop: "10px",
              cursor: "pointer",
            }}
            onClick={() => router.push("/")}
          >
            Explore 1 MILLION
          </button>
        </div>
      </section>
    </main>
  );
}
