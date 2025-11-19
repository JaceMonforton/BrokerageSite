import { Link, useNavigate } from "react-router-dom";
import { Button } from "antd";
import { Building2, Home, LayoutDashboard } from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* NAVBAR */}
      <nav
        style={{
          background: "#fff",
          borderBottom: "1px solid #eee",
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 16px",
          }}
        >
          <div
            style={{
              height: 64,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Logo */}
            <Link
              to="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                textDecoration: "none",
                cursor: "pointer",
                color: "inherit",
              }}
            >
              <Building2 size={24} color="#1677ff" />
              <span style={{ fontWeight: 600 }}>Premier Realty Group</span>
            </Link>

            {/* Navigation Buttons */}
            <div style={{ display: "flex", gap: 8 }}>
              <Button
                type="text"
                onClick={() => navigate("/")}
                icon={<Home size={16} />}
                style={{ display: "flex", alignItems: "center", gap: 6 }}
              >
                Home
              </Button>

              <Button
                type="text"
                onClick={() => navigate("/admin")}
                icon={<LayoutDashboard size={16} />}
                style={{ display: "flex", alignItems: "center", gap: 6 }}
              >
                Admin
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main style={{ flex: 1 }}>{children}</main>

      {/* FOOTER */}
      <footer style={{ background: "#111", color: "#fff", padding: "64px 16px" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 32,
            }}
          >
            {/* Brand */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 16,
                }}
              >
                <Building2 size={24} color="#fff" />
                <span style={{ fontWeight: 600 }}>Premier Realty</span>
              </div>
              <p style={{ color: "#bbb", fontSize: 14 }}>
                Your trusted partner in real estate since 2000
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 style={{ marginBottom: 16 }}>Quick Links</h3>
              <ul style={{ padding: 0, listStyle: "none", fontSize: 14 }}>
                {["About Us", "Our Agents", "Listings", "Contact"].map((item) => (
                  <li key={item} style={{ marginBottom: 8 }}>
                    <a
                      href="#"
                      style={{
                        color: "#bbb",
                        textDecoration: "none",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#bbb")}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 style={{ marginBottom: 16 }}>Services</h3>
              <ul style={{ padding: 0, listStyle: "none", fontSize: 14 }}>
                {[
                  "Buy a Home",
                  "Sell a Home",
                  "Commercial",
                  "Property Management",
                ].map((item) => (
                  <li key={item} style={{ marginBottom: 8 }}>
                    <a
                      href="#"
                      style={{
                        color: "#bbb",
                        textDecoration: "none",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#bbb")}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 style={{ marginBottom: 16 }}>Contact</h3>
              <ul
                style={{
                  padding: 0,
                  listStyle: "none",
                  fontSize: 14,
                  color: "#bbb",
                }}
              >
                <li style={{ marginBottom: 8 }}>123 Main Street</li>
                <li style={{ marginBottom: 8 }}>Los Angeles, CA 90012</li>
                <li style={{ marginBottom: 8 }}>(555) 123-4567</li>
                <li>info@premierrealty.com</li>
              </ul>
            </div>
          </div>

          <div
            style={{
              borderTop: "1px solid #222",
              marginTop: 32,
              paddingTop: 32,
              textAlign: "center",
              fontSize: 14,
              color: "#bbb",
            }}
          >
            © 2025 Premier Realty Group. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
