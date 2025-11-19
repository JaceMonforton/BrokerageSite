import { Card, Image } from "antd";
import { Bed, Bath, Maximize, MapPin } from "lucide-react";
import type { Property } from "../data/mockData";

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const getStatusStyles = (status: Property["status"]) => {
    switch (status) {
      case "For Sale":
        return {
          backgroundColor: "#1677ff",
          color: "#fff",
        };
      case "Pending":
        return {
          backgroundColor: "#faad14",
          color: "#fff",
        };
      case "Sold":
        return {
          backgroundColor: "transparent",
          border: "1px solid #d9d9d9",
          color: "#595959",
        };
      default:
        return {};
    }
  };

  return (
    <Card
      hoverable
      style={{
        overflow: "hidden",
        borderRadius: 12,
      }}
      bodyStyle={{ padding: 0 }}
    >
      {/* IMAGE SECTION */}
      <div style={{ position: "relative", height: 260, overflow: "hidden" }}>
        <Image
          src={property.images[0]}
          alt={property.title}
          width="100%"
          height="100%"
          style={{ objectFit: "cover" }}
          fallback="https://via.placeholder.com/600x400?text=No+Image"
          preview={false}
        />

        {/* STATUS BADGE */}
        <div
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            padding: "6px 12px",
            borderRadius: 6,
            fontSize: 12,
            fontWeight: 600,
            ...getStatusStyles(property.status),
          }}
        >
          {property.status}
        </div>
      </div>

      {/* CONTENT */}
      <div style={{ padding: 24 }}>
        <div style={{ marginBottom: 16 }}>
          <p style={{ color: "#1677ff", marginBottom: 8, fontSize: 18, fontWeight: 600 }}>
            {formatPrice(property.price)}
          </p>

          <h3 style={{ marginBottom: 8, fontSize: 18 }}>{property.title}</h3>

          <div style={{ display: "flex", gap: 8, color: "#8c8c8c" }}>
            <MapPin size={16} style={{ marginTop: 2, flexShrink: 0 }} />
            <p style={{ fontSize: 14 }}>
              {property.address}, {property.city}, {property.state} {property.zipCode}
            </p>
          </div>
        </div>

        {/* FEATURES */}
        <div style={{ display: "flex", gap: 24, color: "#8c8c8c", fontSize: 14 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <Bed size={16} />
            <span>{property.bedrooms} Beds</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <Bath size={16} />
            <span>{property.bathrooms} Baths</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <Maximize size={16} />
            <span>{property.sqft.toLocaleString()} sqft</span>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div
        style={{
          padding: "12px 24px",
          background: "#fafafa",
          borderTop: "1px solid #f0f0f0",
          fontSize: 13,
          color: "#8c8c8c",
        }}
      >
        Listed: {new Date(property.listingDate).toLocaleDateString()}
      </div>
    </Card>
  );
}
