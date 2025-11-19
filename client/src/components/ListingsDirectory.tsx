import { useState } from "react";
import { mockProperties, mockOffices } from "../data/mockData";
import { PropertyCard } from "./PropertyCard";
import { SearchBar } from "./SearchBar";
import { Layout, Typography, Select, Row, Col } from "antd";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

export function ListingsDirectory() {
  const [selectedOffice, setSelectedOffice] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");

  let filteredProperties = mockProperties;

  if (selectedOffice !== "all") {
    filteredProperties = filteredProperties.filter(
      (p) => p.officeId === selectedOffice
    );
  }

  if (selectedStatus !== "all") {
    filteredProperties = filteredProperties.filter(
      (p) => p.status === selectedStatus
    );
  }

  return (
    <Layout style={{ minHeight: "100vh", background: "#f5f5f5" }}>
      <Content>

        {/* HEADER */}
        <section
          style={{
            padding: "64px 0",
            background: "#fff",
            borderBottom: "1px solid #eee",
          }}
        >
          <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 16px" }}>
            <Title level={1} style={{ textAlign: "center", marginBottom: 16 }}>
              Property Listings
            </Title>

            <Paragraph
              style={{
                textAlign: "center",
                color: "#666",
                marginBottom: 32,
                fontSize: 16,
              }}
            >
              Browse our complete collection of available properties
            </Paragraph>

            <SearchBar />
          </div>
        </section>

        {/* FILTERS + LIST */}
        <section style={{ padding: "48px 0" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 16px" }}>

            {/* FILTER BAR */}
            <div
              style={{
                marginBottom: 32,
                display: "flex",
                flexDirection: "column",
                gap: 16,
                justifyContent: "space-between",
              }}
            >
              <div>
                <Title level={2} style={{ marginBottom: 4 }}>
                  {filteredProperties.length} Properties
                </Title>
                <Paragraph style={{ color: "#666", margin: 0 }}>
                  Filter and browse listings
                </Paragraph>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: 12,
                  flexWrap: "wrap",
                  width: "100%",
                }}
              >
                {/* STATUS FILTER */}
                <Select
                  value={selectedStatus}
                  onChange={setSelectedStatus}
                  style={{
                    width: 200,
                    height: 44,
                    borderRadius: 8,
                  }}
                  options={[
                    { value: "all", label: "All Status" },
                    { value: "For Sale", label: "For Sale" },
                    { value: "Pending", label: "Pending" },
                    { value: "Sold", label: "Sold" },
                  ]}
                />

                {/* OFFICE FILTER */}
                <Select
                  value={selectedOffice}
                  onChange={setSelectedOffice}
                  style={{
                    width: 200,
                    height: 44,
                    borderRadius: 8,
                  }}
                  options={[
                    { value: "all", label: "All Offices" },
                    ...mockOffices.map((office) => ({
                      value: office.id,
                      label: office.city,
                    })),
                  ]}
                />
              </div>
            </div>

            {/* LISTING GRID */}
            <Row gutter={[24, 24]}>
              {filteredProperties.map((property) => (
                <Col xs={24} md={12} lg={8} key={property.id}>
                  <PropertyCard property={property} />
                </Col>
              ))}
            </Row>
          </div>
        </section>
      </Content>
    </Layout>
  );
}
