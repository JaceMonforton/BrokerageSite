import { mockAgents, mockProperties } from '../data/mockData';
import { AgentCard } from './AgentCard';
import { PropertyCard } from './PropertyCard';
import { Card, Image, Row, Col } from 'antd';
import { MapPin, Phone, Mail, Users, Building } from 'lucide-react';
import type {Office} from '../data/mockData';
interface OfficePageProps {
  office: Office;
}

export function OfficePage({ office }: OfficePageProps) {
  const officeAgents = mockAgents.filter(a => a.officeId === office.id);
  const officeProperties = mockProperties.filter(p => p.officeId === office.id);
  const activeListings = officeProperties.filter(p => p.status === 'For Sale').length;

  return (
    <div style={{ minHeight: "100vh", background: "rgba(0,0,0,0.03)" }}>

      {/* HEADER */}
      <section style={{ position: "relative", height: 400 }}>
        <Image
          src={office.image}
          alt={office.name}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          preview={false}
        />

        {/* Gradient Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.7))",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            height: "100%",
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <div style={{ width: "100%", padding: "0 16px 48px", color: "#fff" }}>
            <h1 style={{ marginBottom: 16 }}>{office.name}</h1>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 24,
                fontSize: 14,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <MapPin size={20} />
                <span>{office.address}</span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Phone size={20} />
                <span>{office.phone}</span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Mail size={20} />
                <span>{office.email}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BANNER */}
      <div
        style={{
          background: "rgba(24,144,255,0.1)",
          borderBottom: "1px solid rgba(24,144,255,0.2)",
          padding: "8px 0",
        }}
      >
        <div style={{ textAlign: "center", fontSize: 14 }}>
          <span style={{ color: "rgba(0,0,0,0.45)" }}>Office: </span>
          <span
            style={{
              fontFamily: "monospace",
              color: "#1677ff",
            }}
          >
            premierrealty.com/offices/{office.slug}
          </span>
        </div>
      </div>

      {/* STATS */}
      <section style={{ padding: "48px 16px", background: "#fff", borderBottom: "1px solid #eee" }}>
        <Row gutter={[24, 24]}>
          <Col xs={24} md={8}>
            <Card>
              <div style={{ padding: 24, display: "flex", gap: 16, alignItems: "center" }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "rgba(24,144,255,0.1)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Users size={28} color="#1677ff" />
                </div>
                <div>
                  <p style={{ margin: 0, color: "rgba(0,0,0,0.45)" }}>Total Agents</p>
                  <p style={{ margin: 0, fontSize: 24 }}>{officeAgents.length}</p>
                </div>
              </div>
            </Card>
          </Col>

          <Col xs={24} md={8}>
            <Card>
              <div style={{ padding: 24, display: "flex", gap: 16, alignItems: "center" }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "rgba(24,144,255,0.1)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Building size={28} color="#1677ff" />
                </div>
                <div>
                  <p style={{ margin: 0, color: "rgba(0,0,0,0.45)" }}>Active Listings</p>
                  <p style={{ margin: 0, fontSize: 24 }}>{activeListings}</p>
                </div>
              </div>
            </Card>
          </Col>

          <Col xs={24} md={8}>
            <Card>
              <div style={{ padding: 24, display: "flex", gap: 16, alignItems: "center" }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "rgba(24,144,255,0.1)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Building size={28} color="#1677ff" />
                </div>
                <div>
                  <p style={{ margin: 0, color: "rgba(0,0,0,0.45)" }}>Total Properties</p>
                  <p style={{ margin: 0, fontSize: 24 }}>{officeProperties.length}</p>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </section>

      {/* ABOUT */}
      <section style={{ padding: "48px 16px" }}>
        <Card>
          <div style={{ padding: 32 }}>
            <h2 style={{ marginBottom: 16 }}>About Our Office</h2>
            <p style={{ color: "rgba(0,0,0,0.55)", lineHeight: 1.6 }}>
              {office.description}
            </p>
          </div>
        </Card>
      </section>

      {/* AGENTS */}
      <section style={{ padding: "48px 16px", background: "#fff" }}>
        <div style={{ marginBottom: 32 }}>
          <h2 style={{ marginBottom: 8 }}>Our Agents</h2>
          <p style={{ color: "rgba(0,0,0,0.45)" }}>
            Meet our team of {officeAgents.length} dedicated real estate professionals
          </p>
        </div>

        <Row gutter={[24, 24]}>
          {officeAgents.map(agent => (
            <Col xs={24} md={12} lg={8} key={agent.id}>
              <AgentCard agent={agent} />
            </Col>
          ))}
        </Row>
      </section>

      {/* LISTINGS */}
      <section style={{ padding: "48px 16px" }}>
        <div style={{ marginBottom: 32 }}>
          <h2 style={{ marginBottom: 8 }}>Current Listings</h2>
          <p style={{ color: "rgba(0,0,0,0.45)" }}>
            {activeListings} active {activeListings === 1 ? "listing" : "listings"} from this office
          </p>
        </div>

        {officeProperties.length > 0 ? (
          <Row gutter={[24, 24]}>
            {officeProperties.map(property => (
              <Col xs={24} md={12} lg={8} key={property.id}>
                <PropertyCard property={property} />
              </Col>
            ))}
          </Row>
        ) : (
          <Card>
            <div style={{ padding: 48, textAlign: "center" }}>
              <Building size={48} color="rgba(0,0,0,0.45)" style={{ marginBottom: 16 }} />
              <p style={{ color: "rgba(0,0,0,0.45)" }}>No current listings available</p>
            </div>
          </Card>
        )}
      </section>
    </div>
  );
}
