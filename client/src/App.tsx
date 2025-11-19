import { BrowserRouter, Routes, Route, useNavigate, useParams, Link } from 'react-router-dom';
import { mockAgents, mockOffices } from './data/mockData';
import { HomePage } from './components/HomePage';
import { AdminDashboard } from './components/AdminDashboard';
import { AgentPage } from './pages/AgentPage';
import { OfficePage } from './components/OfficePage';
import { OfficesDirectory } from './components/OfficesDirectory';
import { AgentsDirectory } from './components/AgentsDirectory';
import { ListingsDirectory } from './components/ListingsDirectory';

import { Layout, Button, Row, Col } from 'antd';
import { Building2 } from 'lucide-react';

const { Header, Content, Footer } = Layout;

/* ---------------- NAVIGATION ---------------- */

function Navigation() {
  const navigate = useNavigate();

  return (
    <Header
      style={{
        background: "#fff",
        borderBottom: "1px solid #e5e5e5",
        position: "sticky",
        top: 0,
        zIndex: 100,
        boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
        padding: "0 24px"
      }}
    >
      <Row align="middle" justify="space-between" style={{ height: 64 }}>
        {/* Logo */}
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            cursor: "pointer",
          }}
        >
          <Building2 size={22} color="#1677ff" />
          <span style={{ fontWeight: 600, fontSize: 16 }}>Premier Realty</span>
        </Link>

        {/* Nav Items */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Button type="text" onClick={() => navigate('/listings')}>
            Listings
          </Button>
          <Button type="text" onClick={() => navigate('/agents')}>
            Agents
          </Button>
          <Button type="text" onClick={() => navigate('/offices')}>
            Offices
          </Button>

          {/* Divider */}
          <div style={{ width: 1, height: 24, background: "#d9d9d9", margin: "0 8px" }} />

    {/* Render only if admin */}
          {/* {user?.isAdmin && (
            <Button type="text" onClick={() => navigate("/admin")}>
              <LayoutDashboard size={16} style={{ marginRight: 6 }} />
              Admin
            </Button>
          )} */}
        </div>
      </Row>
    </Header>
  );
}

/* ---------------- AGENT PAGE WRAPPER ---------------- */

function AgentPageWrapper() {
  const { agentExtension } = useParams();
  const agent = mockAgents.find((a) => a.extension === agentExtension);

  if (!agent) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h2 style={{ marginBottom: 16 }}>Agent Not Found</h2>
          <p style={{ marginBottom: 24, color: "#777" }}>
            The agent you're looking for doesn't exist.
          </p>
          <Link to="/">
            <Button type="primary">Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div
        style={{
          background: "rgba(22,119,255,0.08)",
          borderBottom: "1px solid rgba(22,119,255,0.2)",
          padding: "8px 0",
          textAlign: "center"
        }}
      >
        <p style={{ margin: 0, fontSize: 13 }}>
          <span style={{ color: "#777" }}>Agent Profile:</span>{' '}
          <span style={{ fontFamily: "monospace", color: "#1677ff" }}>
            premierrealty.com/{agent.extension}
          </span>
        </p>
      </div>

      <AgentPage agent={agent} />
    </>
  );
}

/* ---------------- OFFICE PAGE WRAPPER ---------------- */

function OfficePageWrapper() {
  const { officeSlug } = useParams();
  const office = mockOffices.find((o) => o.slug === officeSlug);

  if (!office) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h2 style={{ marginBottom: 16 }}>Office Not Found</h2>
          <p style={{ marginBottom: 24, color: "#777" }}>
            The office you're looking for doesn't exist.
          </p>
          <Link to="/offices">
            <Button type="primary">View All Offices</Button>
          </Link>
        </div>
      </div>
    );
  }

  return <OfficePage office={office} />;
}

/* ---------------- MAIN APP ---------------- */

export default function App() {
  return (
    <BrowserRouter>
        <Navigation />

        <Content style={{ flex: 1, paddingBottom: 40 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/listings" element={<ListingsDirectory />} />
            <Route path="/agents" element={<AgentsDirectory />} />
            <Route path="/offices" element={<OfficesDirectory />} />
            <Route path="/offices/:officeSlug" element={<OfficePageWrapper />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/:agentExtension" element={<AgentPageWrapper />} />
          </Routes>
        </Content>

        {/* FOOTER */}
        <Footer style={{ background: "#111", color: "#fff", padding: "60px 24px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <Row gutter={[32, 32]}>
              {/* Column 1 */}
              <Col xs={24} md={6}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                  <Building2 color="white" size={22} />
                  <span style={{ fontWeight: 600 }}>Premier Realty</span>
                </div>
                <p style={{ color: "#bbb", fontSize: 14 }}>
                  Your trusted partner in real estate since 2000
                </p>
              </Col>

              {/* Quick Links */}
              <Col xs={24} md={6}>
                <h3 style={{ marginBottom: 16 }}>Quick Links</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, color: "#bbb" }}>
                  <li style={{ marginBottom: 8 }}>
                    <Link to="/listings" style={{ color: "#bbb" }}>Browse Listings</Link>
                  </li>
                  <li style={{ marginBottom: 8 }}>
                    <Link to="/agents" style={{ color: "#bbb" }}>Find an Agent</Link>
                  </li>
                  <li style={{ marginBottom: 8 }}>
                    <Link to="/offices" style={{ color: "#bbb" }}>Our Offices</Link>
                  </li>
                  <li>
                    <a style={{ color: "#bbb" }}>About Us</a>
                  </li>
                </ul>
              </Col>

              {/* Services */}
              <Col xs={24} md={6}>
                <h3 style={{ marginBottom: 16 }}>Services</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, color: "#bbb" }}>
                  <li style={{ marginBottom: 8 }}><a style={{ color: "#bbb" }}>Buy a Home</a></li>
                  <li style={{ marginBottom: 8 }}><a style={{ color: "#bbb" }}>Sell a Home</a></li>
                  <li style={{ marginBottom: 8 }}><a style={{ color: "#bbb" }}>Commercial</a></li>
                  <li><a style={{ color: "#bbb" }}>Property Management</a></li>
                </ul>
              </Col>

              {/* Contact */}
              <Col xs={24} md={6}>
                <h3 style={{ marginBottom: 16 }}>Contact</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, color: "#bbb" }}>
                  <li style={{ marginBottom: 8 }}>Ontario, Canada</li>
                  <li style={{ marginBottom: 8 }}>(555) 123-4567</li>
                  <li>info@premierrealty.com</li>
                </ul>
              </Col>
            </Row>

            <div
              style={{
                borderTop: "1px solid #222",
                marginTop: 32,
                paddingTop: 24,
                textAlign: "center",
                color: "#888",
                fontSize: 13
              }}
            >
              © 2025 Premier Realty Group. All rights reserved.
            </div>
          </div>
        </Footer>
    </BrowserRouter>
  );
}
