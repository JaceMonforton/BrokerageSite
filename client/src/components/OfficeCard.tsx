import { Card, Button, Image } from "antd";
import { MapPin, Phone, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type {Office} from '../data/mockData';

interface OfficeCardProps {
  office: Office;
}

export function OfficeCard({ office }: OfficeCardProps) {
  const navigate = useNavigate();

  return (
    <Card
      hoverable
      style={{
        overflow: "hidden",
        borderRadius: 12,
        transition: "box-shadow 0.2s ease",
      }}
      bodyStyle={{ padding: 0 }}
    >
      {/* Image Section */}
      <div style={{ position: "relative", height: 190 }}>
        <Image
          src={office.image}
          alt={office.name}
          preview={false}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          fallback="/fallback.jpg"
        />
      </div>

      {/* Content Section */}
      <div style={{ padding: 24 }}>
        <h3 style={{ marginBottom: 12 }}>{office.name}</h3>

        <div style={{ marginBottom: 20 }}>
          {/* Address */}
          <div
            style={{
              display: "flex",
              gap: 8,
              marginBottom: 12,
              fontSize: 14,
              color: "rgba(0,0,0,0.55)",
            }}
          >
            <MapPin size={16} style={{ flexShrink: 0, marginTop: 2 }} />
            <span>{office.address}</span>
          </div>

          {/* Phone */}
          <div
            style={{
              display: "flex",
              gap: 8,
              marginBottom: 12,
              fontSize: 14,
              color: "rgba(0,0,0,0.55)",
            }}
          >
            <Phone size={16} style={{ flexShrink: 0 }} />
            <span>{office.phone}</span>
          </div>

          {/* Email */}
          <div
            style={{
              display: "flex",
              gap: 8,
              fontSize: 14,
              color: "rgba(0,0,0,0.55)",
            }}
          >
            <Mail size={16} style={{ flexShrink: 0 }} />
            <span>{office.email}</span>
          </div>
        </div>

        {/* Button */}
        <Button
          type="primary"
          block
          onClick={() => navigate(`/offices/${office.slug}`)}
        >
          View Office
        </Button>
      </div>
    </Card>
  );
}
