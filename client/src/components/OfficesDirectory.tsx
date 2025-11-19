import { mockOffices } from '../data/mockData';
import { OfficeCard } from './OfficeCard';
import { SearchBar } from './SearchBar';
import { Row, Col } from 'antd';

export function OfficesDirectory() {
  return (
    <div style={{ minHeight: "100vh", background: "rgba(0,0,0,0.03)" }}>
      
      {/* HEADER */}
      <section
        style={{
          padding: "64px 0",
          background: "#fff",
          borderBottom: "1px solid #eee",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 16px", textAlign: "center" }}>
          <h1 style={{ marginBottom: 16 }}>Our Offices</h1>

          <p
            style={{
              marginBottom: 32,
              color: "rgba(0,0,0,0.55)",
              lineHeight: 1.6,
            }}
          >
            Find a Premier Realty office near you. We're proud to serve communities across Ontario.
          </p>

          <SearchBar />
        </div>
      </section>

      {/* OFFICES LIST */}
      <section style={{ padding: "48px 16px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          
          <div style={{ marginBottom: 32 }}>
            <h2 style={{ marginBottom: 8 }}>{mockOffices.length} Office Locations</h2>
            <p style={{ color: "rgba(0,0,0,0.45)" }}>Browse all our office locations</p>
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

    </div>
  );
}
