import type { Agent } from "../data/mockData";
import {  mockProperties } from "../data/mockData";
import { PropertyCard } from "../components/PropertyCard";
import { Card, Button, Tag, Image } from "antd";
import { Mail, Phone, Award, Building2, CheckCircle } from "lucide-react";

interface AgentPageProps {
  agent: Agent;
}

export function AgentPage({ agent }: AgentPageProps) {
  const agentProperties = mockProperties.filter((p) => p.agentId === agent.id);
  const activeListings = agentProperties.filter((p) => p.status === "For Sale").length;
  const pendingListings = agentProperties.filter((p) => p.status === "Pending").length;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
      }}
    >
      {/* HEADER */}
      <section
        style={{
          background: "#fff",
          borderBottom: "1px solid #e5e5e5",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "48px 16px",
            display: "flex",
            gap: 32,
            flexDirection: "row",
          }}
        >
          {/* Agent Avatar */}
          <div
            style={{
              width: 192,
              height: 192,
              borderRadius: "50%",
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            <Image
              src={agent.photo}
              alt={agent.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          {/* Agent Info */}
          <div style={{ flex: 1 }}>
            <h1 style={{ marginBottom: 8 }}>{agent.name}</h1>
            <p style={{ color: "#777", marginBottom: 16 }}>{agent.title}</p>

            {/* Specialties */}
            <div
              style={{
                display: "flex",
                gap: 8,
                flexWrap: "wrap",
                marginBottom: 24,
              }}
            >
              {agent.specialties.map((spec) => (
                <Tag
                  key={spec}
                  color="blue"
                  style={{ padding: "4px 10px", fontSize: 13 }}
                >
                  {spec}
                </Tag>
              ))}
            </div>

            {/* Stats */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: 16,
                marginBottom: 24,
              }}
            >
              {/* Experience */}
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "rgba(24,144,255,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Award size={22} color="#1890ff" />
                </div>
                <div>
                  <p style={{ fontSize: 13, color: "#888" }}>Experience</p>
                  <p>{agent.yearsExperience} Years</p>
                </div>
              </div>

              {/* Sales */}
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "rgba(24,144,255,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Building2 size={22} color="#1890ff" />
                </div>
                <div>
                  <p style={{ fontSize: 13, color: "#888" }}>Total Sales</p>
                  <p>{agent.totalSales} Properties</p>
                </div>
              </div>

              {/* Active Listings */}
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "rgba(24,144,255,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <CheckCircle size={22} color="#1890ff" />
                </div>
                <div>
                  <p style={{ fontSize: 13, color: "#888" }}>Active Listings</p>
                  <p>{activeListings} Properties</p>
                </div>
              </div>
            </div>

            {/* Contact Buttons */}
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Button type="primary" style={{ height: 40 }}>
                <Mail size={16} style={{ marginRight: 6 }} />
                {agent.email}
              </Button>
              <Button style={{ height: 40 }}>
                <Phone size={16} style={{ marginRight: 6 }} />
                {agent.phone}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section style={{ padding: "48px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 16px" }}>
          <Card style={{ borderRadius: 12 }}>
            <div style={{ padding: 32 }}>
              <h2 style={{ marginBottom: 16 }}>About {agent.name.split(" ")[0]}</h2>
              <p style={{ color: "#777", lineHeight: 1.6 }}>{agent.bio}</p>
            </div>
          </Card>
        </div>
      </section>

      {/* CURRENT LISTINGS */}
      <section style={{ padding: "48px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 16px" }}>
          <div style={{ marginBottom: 32 }}>
            <h2>Current Listings</h2>
            <p style={{ color: "#777" }}>
              {activeListings} active{" "}
              {activeListings === 1 ? "listing" : "listings"} | {pendingListings} pending
            </p>
          </div>

          {agentProperties.length > 0 ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: 24,
              }}
            >
              {agentProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <Card style={{ borderRadius: 12 }}>
              <div style={{ padding: 48, textAlign: "center" }}>
                <Building2 size={48} color="#999" style={{ marginBottom: 16 }} />
                <p style={{ color: "#777" }}>No current listings available</p>
              </div>
            </Card>
          )}
        </div>
      </section>

      {/* CONTACT CTA FOOTER */}
      <section
        style={{
          padding: "48px 0",
          background: "#1890ff",
          color: "white",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 16px" }}>
          <h2 style={{ marginBottom: 16 }}>Ready to Work Together?</h2>
          <p style={{ marginBottom: 32 }}>
            Contact {agent.name.split(" ")[0]} today to discuss your real estate needs
          </p>

          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Button
              size="large"
              style={{
                background: "white",
                border: "none",
                height: 44,
              }}
            >
              Schedule a Consultation
            </Button>

            <Button
              size="large"
              style={{
                background: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.4)",
                color: "white",
                height: 44,
              }}
            >
              Send a Message
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
