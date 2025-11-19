import { Card, Tag } from "antd";
import { Bed, Bath, Maximize, MapPin } from "lucide-react";
import { Image } from "antd";
import type { Property } from "../data/mockData";

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const formatPrice = (price: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(price);

  const getStatusColor = (status: Property["status"]) => {
    switch (status) {
      case "For Sale":
        return "processing";
      case "Pending":
        return "warning";
      case "Sold":
        return "default";
      default:
        return "default";
    }
  };

  return (
    <Card
      hoverable
      style={{
        overflow: "hidden",
        borderRadius: 12,
        boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
      }}
      bodyStyle={{ padding: 0 }}
    >
      {/* IMAGE */}
      <div style={{ position: "relative", height: 260, width: "100%" }}>
        <Image
          src={property.images[0]}
          alt={property.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />

        {/* STATUS TAG */}
        <Tag
          color={getStatusColor(property.status)}
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            padding: "6px 10px",
            fontSize: 13,
            borderRadius: 8,
          }}
        >
          {property.status}
        </Tag>
      </div>

      {/* CONTENT */}
      <div style={{ padding: 24 }}>
        <div style={{ marginBottom: 16 }}>
          <p style={{ color: "#1677ff", marginBottom: 6, fontWeight: 600 }}>
            {formatPrice(property.price)}
          </p>

          <h3 style={{ marginBottom: 6, fontSize: 18, fontWeight: 600 }}>
            {property.title}
          </h3>

          <div style={{ display: "flex", gap: 8, color: "#888" }}>
            <MapPin size={16} style={{ marginTop: 2 }} />
            <p style={{ fontSize: 14 }}>
              {property.address}, {property.city}, {property.state}{" "}
              {property.zipCode}
            </p>
          </div>
        </div>

        {/* SPECS */}
        <div
          style={{
            display: "flex",
            gap: 24,
            color: "#888",
            fontSize: 14,
          }}
        >
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
          padding: "14px 24px",
          borderTop: "1px solid #f0f0f0",
          background: "#fafafa",
        }}
      >
        <p style={{ fontSize: 13, color: "#888" }}>
          Listed: {new Date(property.listingDate).toLocaleDateString()}
        </p>
      </div>
    </Card>
  );
}
