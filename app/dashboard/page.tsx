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
      <main
        style={{
          minHeight: "100vh",
          background: "#080808",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            background: "#151515",
            border: "1px solid #292929",
            borderRadius: "20px",
            padding: "35px",
            textAlign: "center",
          }}
        >
          <h1 style={{ margin: 0 }}>Loading...</h1>
        </div>
      </main>
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        background: "#080808",
        color: "#ffffff",
        fontFamily: "Arial, sans-serif",
        boxSizing: "border-box",
        padding: "20px",
        overflowX: "hidden",
      }}
    >
      <header
        style={{
          width: "100%",
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "15px",
          padding: "10px 0 30px",
          boxSizing: "border-box",
        }}
      >
        <a
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            color: "#fff",
            textDecoration: "none",
            fontSize: "22px",
            fontWeight: "800",
            letterSpacing: "1px",
            whiteSpace: "nowrap",
          }}
        >
          <span
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "10px",
              background: "#fff",
              color: "#000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "900",
              fontSize: "22px",
            }}
          >
            1
          </span>

          <span>MILLION</span>
        </a>

        <button
          onClick={handleLogout}
          style={{
            background: "#fff",
            color: "#000",
            border: "none",
            borderRadius: "10px",
            padding: "11px 18px",
            fontSize: "14px",
            fontWeight: "700",
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        >
          Log out
        </button>
      </header>

      <section
        style={{
          width: "100%",
          maxWidth: "1100px",
          margin: "0 auto",
          boxSizing: "border-box",
        }}
      >
        {/* Welcome */}
        <div
          style={{
            width: "100%",
            background: "linear-gradient(135deg, #171717, #0d0d0d)",
            border: "1px solid #292929",
            borderRadius: "20px",
            padding: "30px",
            marginBottom: "20px",
            boxSizing: "border-box",
          }}
        >
          <p
            style={{
              margin: "0 0 10px",
              color: "#999",
              fontSize: "13px",
              fontWeight: "700",
              letterSpacing: "1.5px",
            }}
          >
            WELCOME BACK
          </p>

          <h1
            style={{
              margin: "0 0 10px",
              fontSize: "clamp(28px, 6vw, 42px)",
              lineHeight: "1.2",
              fontWeight: "800",
              overflowWrap: "anywhere",
            }}
          >
            {name}
          </h1>

          <p
            style={{
              margin: 0,
              color: "#aaa",
              fontSize: "15px",
              lineHeight: "1.5",
              overflowWrap: "anywhere",
              wordBreak: "break-word",
            }}
          >
            {email}
          </p>
        </div>

        {/* Statistics */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
            gap: "15px",
            width: "100%",
          }}
        >
          <div
            style={{
              background: "#151515",
              border: "1px solid #292929",
              borderRadius: "18px",
              padding: "25px",
              minWidth: 0,
              boxSizing: "border-box",
            }}
          >
            <p
              style={{
                color: "#888",
                margin: "0 0 10px",
                fontSize: "13px",
                fontWeight: "700",
                letterSpacing: "1px",
              }}
            >
              BALANCE
            </p>

            <h2
              style={{
                margin: 0,
                fontSize: "30px",
                lineHeight: "1.2",
              }}
            >
              $0.00
            </h2>
          </div>

          <div
            style={{
              background: "#151515",
              border: "1px solid #292929",
              borderRadius: "18px",
              padding: "25px",
              minWidth: 0,
              boxSizing: "border-box",
            }}
          >
            <p
              style={{
                color: "#888",
                margin: "0 0 10px",
                fontSize: "13px",
                fontWeight: "700",
                letterSpacing: "1px",
              }}
            >
              TOTAL GAMES
            </p>

            <h2
              style={{
                margin: 0,
                fontSize: "30px",
                lineHeight: "1.2",
              }}
            >
              0
            </h2>
          </div>

          <div
            style={{
              background: "#151515",
              border: "1px solid #292929",
              borderRadius: "18px",
              padding: "25px",
              minWidth: 0,
              boxSizing: "border-box",
            }}
          >
            <p
              style={{
                color: "#888",
                margin: "0 0 10px",
                fontSize: "13px",
                fontWeight: "700",
                letterSpacing: "1px",
              }}
            >
              STATUS
            </p>

            <h2
              style={{
                margin: 0,
                fontSize: "24px",
                lineHeight: "1.2",
              }}
            >
              Active
            </h2>
          </div>
        </div>

        {/* Dashboard information */}
        <div
          style={{
            marginTop: "20px",
            background: "#151515",
            border: "1px solid #292929",
            borderRadius: "18px",
            padding: "30px",
            boxSizing: "border-box",
          }}
        >
          <h2
            style={{
              margin: "0 0 12px",
              fontSize: "24px",
              lineHeight: "1.3",
            }}
          >
            Your Dashboard
          </h2>

          <p
            style={{
              margin: 0,
              color: "#999",
              fontSize: "15px",
              lineHeight: "1.7",
              overflowWrap: "anywhere",
            }}
          >
            Your games, account activity, balance and profile
            information will appear here.
          </p>

          <button
            onClick={() => router.push("/")}
            style={{
              marginTop: "20px",
              background: "#fff",
              color: "#000",
              border: "none",
              borderRadius: "10px",
              padding: "13px 20px",
              fontSize: "14px",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            Explore 1 MILLION
          </button>
        </div>
      </section>
    </main>
  );
}
