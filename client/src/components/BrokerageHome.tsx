import { Image } from "antd";
import { Button, Card, Row, Col } from "antd";
import { Building2, Users, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { mockAgents, mockProperties } from "../data/mockData";
import type {Agent} from '../data/mockData'
import { AgentCard } from "./AgentCard";
import { PropertyCard } from "./PropertyCard";

export function BrokerageHome() {
  const navigate = useNavigate();

  const handleViewAgent = (agent: Agent) => {
    navigate(`/${agent.extension}`);
  };

  return (
    <div style={{ minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>

      {/* HERO SECTION */}
      <section
        style={{
          position: "relative",
          height: 600,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ position: "absolute", inset: 0 }}>
          <Image
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
            alt="Real Estate Office"
            preview={false}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            fallback="/fallback.jpg"
          />

          {/* Dark overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.5)",
            }}
          />
        </div>

        {/* HERO CONTENT */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            color: "white",
            textAlign: "center",
            maxWidth: 900,
            padding: "0 20px",
          }}
        >
          <h1 style={{ fontSize: 48, fontWeight: 700, marginBottom: 20 }}>
            Premier Realty Group
          </h1>
          <p style={{ fontSize: 20, opacity: 0.9, marginBottom: 40 }}>
            Your trusted partner in finding the perfect property.
            Excellence, integrity, and results.
          </p>

          <div style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap" }}>
            <Button size="large" type="primary">
              Browse Listings
            </Button>

            <Button
              size="large"
              style={{
                border: "1px solid white",
                background: "rgba(255,255,255,0.1)",
                color: "white",
              }}
            >
              Meet Our Agents
            </Button>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section style={{ padding: "80px 0", background: "#f5f5f5" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
          <Row gutter={[40, 40]} justify="center">
            {/* STAT 1 */}
            <Col xs={24} md={8}>
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: 64,
                    height: 64,
                    margin: "0 auto",
                    borderRadius: "50%",
                    background: "rgba(0,123,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 20,
                  }}
                >
                  <Building2 size={32} color="#1677ff" />
                </div>
                <h2 style={{ fontSize: 32, marginBottom: 10 }}>500+</h2>
                <p style={{ color: "#555" }}>Properties Sold</p>
              </div>
            </Col>

            {/* STAT 2 */}
            <Col xs={24} md={8}>
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: 64,
                    height: 64,
                    margin: "0 auto",
                    borderRadius: "50%",
                    background: "rgba(0,123,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 20,
                  }}
                >
                  <Users size={32} color="#1677ff" />
                </div>
                <h2 style={{ fontSize: 32, marginBottom: 10 }}>50+</h2>
                <p style={{ color: "#555" }}>Expert Agents</p>
              </div>
            </Col>

            {/* STAT 3 */}
            <Col xs={24} md={8}>
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: 64,
                    height: 64,
                    margin: "0 auto",
                    borderRadius: "50%",
                    background: "rgba(0,123,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 20,
                  }}
                >
                  <TrendingUp size={32} color="#1677ff" />
                </div>
                <h2 style={{ fontSize: 32, marginBottom: 10 }}>25</h2>
                <p style={{ color: "#555" }}>Years in Business</p>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* FEATURED LISTINGS */}
      <section style={{ padding: "80px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ textAlign: "center", marginBottom: 50 }}>
            <h2 style={{ fontSize: 36, marginBottom: 10 }}>Featured Listings</h2>
            <p style={{ color: "#666", maxWidth: 600, margin: "0 auto" }}>
              Discover our handpicked selection of premium properties
            </p>
          </div>

          <Row gutter={[24, 24]}>
            {mockProperties.slice(0, 6).map((property) => (
              <Col xs={24} md={12} lg={8} key={property.id}>
                <PropertyCard property={property} />
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* AGENTS SECTION */}
      <section style={{ padding: "80px 0", background: "#f5f5f5" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ textAlign: "center", marginBottom: 50 }}>
            <h2 style={{ fontSize: 36, marginBottom: 10 }}>Meet Our Agents</h2>
            <p style={{ color: "#666", maxWidth: 600, margin: "0 auto" }}>
              Work with experienced professionals dedicated to your success
            </p>
          </div>

          <Row gutter={[24, 24]} justify="center">
            {mockAgents.map((agent) => (
              <Col xs={24} md={12} lg={8} key={agent.id}>
                <AgentCard agent={agent} onViewProfile={handleViewAgent} />
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* CTA SECTION */}
      <section
        style={{
          padding: "80px 0",
          background: "#1677ff",
          color: "white",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: 36, marginBottom: 20 }}>
          Ready to Find Your Dream Home?
        </h2>
        <p style={{ maxWidth: 600, margin: "0 auto 40px", opacity: 0.95 }}>
          Let our experienced agents guide you through every step of the process.
        </p>

        <Button size="large" type="default">
          Contact Us Today
        </Button>
      </section>

    </div>
  );
}
