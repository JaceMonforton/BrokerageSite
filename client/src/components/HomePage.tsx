import { useNavigate } from "react-router-dom";
import { Row, Col, Button, Typography, Layout } from "antd";
import { Building2, Users, TrendingUp, Search } from "lucide-react";
import { Image } from "antd";
import { mockOffices, mockProperties } from "../data/mockData";
import { SearchBar } from "./SearchBar";
import { OfficeCard } from "./OfficeCard";
import { PropertyCard } from "./PropertyCard";

const { Title, Paragraph } = Typography;
const { Content } = Layout;

export function HomePage() {
  const navigate = useNavigate();
  const featuredProperties = mockProperties.filter((p) => p.featured);

  return (
    <Layout style={{ minHeight: "100vh", background: "#ffffff" }}>
      <Content>

        {/* HERO SECTION */}
        <section
          style={{
            position: "relative",
            height: 500,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", inset: 0 }}>
            <Image
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
              alt="Real Estate"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.4))",
              }}
            ></div>
          </div>

          <div
            style={{
              position: "relative",
              zIndex: 10,
              textAlign: "center",
              color: "white",
              padding: "0 16px",
              width: "100%",
              maxWidth: 960,
              margin: "0 auto",
            }}
          >
            <Title level={1} style={{ color: "white", marginBottom: 16 }}>
              Find Your Dream Home
            </Title>
            <Paragraph style={{ color: "white", fontSize: 18, marginBottom: 32 }}>
              Search properties, agents, and offices across Ontario
            </Paragraph>

            <SearchBar variant="hero" />
          </div>
        </section>

        {/* QUICK LINKS */}
        <section style={{ padding: "48px 0", background: "#fff", borderBottom: "1px solid #eee" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 16px" }}>
            <Row gutter={[24, 24]}>
              {/* Browse Listings */}
              <Col xs={24} md={8}>
                <Button
                  block
                  onClick={() => navigate("/listings")}
                  style={{
                    height: "auto",
                    padding: "32px 16px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 12,
                    borderRadius: 12,
                  }}
                >
                  <Search size={32} color="var(--primary-color)" />
                  <div style={{ textAlign: "center" }}>
                    <Title level={3} style={{ marginBottom: 4 }}>
                      Browse Listings
                    </Title>
                    <Paragraph style={{ margin: 0, color: "#666" }}>
                      Explore available properties
                    </Paragraph>
                  </div>
                </Button>
              </Col>

              {/* Find Agent */}
              <Col xs={24} md={8}>
                <Button
                  block
                  onClick={() => navigate("/agents")}
                  style={{
                    height: "auto",
                    padding: "32px 16px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 12,
                    borderRadius: 12,
                  }}
                >
                  <Users size={32} color="var(--primary-color)" />
                  <div style={{ textAlign: "center" }}>
                    <Title level={3} style={{ marginBottom: 4 }}>
                      Find an Agent
                    </Title>
                    <Paragraph style={{ margin: 0, color: "#666" }}>
                      Connect with experts
                    </Paragraph>
                  </div>
                </Button>
              </Col>

              {/* Offices */}
              <Col xs={24} md={8}>
                <Button
                  block
                  onClick={() => navigate("/offices")}
                  style={{
                    height: "auto",
                    padding: "32px 16px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 12,
                    borderRadius: 12,
                  }}
                >
                  <Building2 size={32} color="var(--primary-color)" />
                  <div style={{ textAlign: "center" }}>
                    <Title level={3} style={{ marginBottom: 4 }}>
                      Our Offices
                    </Title>
                    <Paragraph style={{ margin: 0, color: "#666" }}>
                      Visit our locations
                    </Paragraph>
                  </div>
                </Button>
              </Col>
            </Row>
          </div>
        </section>

        {/* FEATURED LISTINGS */}
        <section style={{ padding: "64px 0", background: "#f5f5f5" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 16px" }}>
            <div
              style={{
                marginBottom: 32,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <Title level={2} style={{ marginBottom: 8 }}>
                  Featured Listings
                </Title>
                <Paragraph style={{ color: "#666" }}>
                  Handpicked premium properties
                </Paragraph>
              </div>

              <Button onClick={() => navigate("/listings")} style={{ borderRadius: 8 }}>
                View All Listings
              </Button>
            </div>

            <Row gutter={[24, 24]}>
              {featuredProperties.map((property) => (
                <Col xs={24} md={12} lg={8} key={property.id}>
                  <PropertyCard property={property} />
                </Col>
              ))}
            </Row>
          </div>
        </section>

        {/* OFFICES */}
        <section style={{ padding: "64px 0" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 16px" }}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <Title level={2} style={{ marginBottom: 12 }}>
                Our Offices
              </Title>
              <Paragraph style={{ color: "#666", maxWidth: 600, margin: "0 auto" }}>
                Visit one of our conveniently located offices across Ontario
              </Paragraph>
            </div>

            <Row gutter={[24, 24]}>
              {mockOffices.map((office) => (
                <Col xs={24} md={12} lg={8} key={office.id}>
                  <OfficeCard office={office} />
                </Col>
              ))}
            </Row>
          </div>
        </section>

        {/* STATS SECTION */}
        <section
          style={{
            padding: "64px 0",
            background: "var(--primary-color)",
            color: "white",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 16px" }}>
            <Row gutter={[24, 24]}>
              {/* Properties Sold */}
              <Col xs={24} md={8}>
                <div
                  style={{
                    width: 64,
                    height: 64,
                    margin: "0 auto 16px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Building2 size={32} color="white" />
                </div>
                <Title level={2} style={{ color: "white" }}>
                  1000+
                </Title>
                <Paragraph style={{ color: "white" }}>Properties Sold</Paragraph>
              </Col>

              {/* Agents */}
              <Col xs={24} md={8}>
                <div
                  style={{
                    width: 64,
                    height: 64,
                    margin: "0 auto 16px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Users size={32} color="white" />
                </div>
                <Title level={2} style={{ color: "white" }}>
                  50+
                </Title>
                <Paragraph style={{ color: "white" }}>Expert Agents</Paragraph>
              </Col>

              {/* Years in Business */}
              <Col xs={24} md={8}>
                <div
                  style={{
                    width: 64,
                    height: 64,
                    margin: "0 auto 16px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <TrendingUp size={32} color="white" />
                </div>
                <Title level={2} style={{ color: "white" }}>
                  25
                </Title>
                <Paragraph style={{ color: "white" }}>Years in Business</Paragraph>
              </Col>
            </Row>
          </div>
        </section>

        {/* CTA SECTION */}
        <section style={{ padding: "64px 0", background: "#f5f5f5" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center", padding: "0 16px" }}>
            <Title level={2} style={{ marginBottom: 16 }}>
              Ready to Get Started?
            </Title>
            <Paragraph style={{ marginBottom: 32, maxWidth: 600, margin: "0 auto", color: "#666" }}>
              Whether you're buying, selling, or investing, our team is here to help
            </Paragraph>

            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Button
                size="large"
                onClick={() => navigate("/agents")}
                style={{ padding: "0 24px", height: 48, borderRadius: 8 }}
              >
                Find an Agent
              </Button>

              <Button
                size="large"
                style={{ padding: "0 24px", height: 48, borderRadius: 8 }}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </section>

      </Content>
    </Layout>
  );
}
