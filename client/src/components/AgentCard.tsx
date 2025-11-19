import type { Agent } from "../data/mockData";
import { useNavigate } from "react-router-dom";
import { Card, Button, Tag } from "antd";
import { Mail, Phone, Award } from "lucide-react";
import { Image } from "antd";

interface AgentCardProps {
  agent: Agent;
  onViewProfile?: (agent: Agent) => void;
}

export function AgentCard({ agent, onViewProfile }: AgentCardProps) {
  const navigate = useNavigate();

  const handleViewProfile = () => {
    if (onViewProfile) {
      onViewProfile(agent);
    } else {
      navigate(`/${agent.extension}`);
    }
  };

  return (
    <Card
      hoverable
      style={{
        borderRadius: 12,
        transition: "box-shadow 0.2s",
      }}
      bodyStyle={{ padding: 24 }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        {/* Avatar */}
        <div
          style={{
            width: 128,
            height: 128,
            borderRadius: "50%",
            overflow: "hidden",
            marginBottom: 16,
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

        {/* Name */}
        <h3 style={{ marginBottom: 4, fontWeight: 600 }}>{agent.name}</h3>
        <p style={{ color: "#888", marginBottom: 16 }}>{agent.title}</p>

        {/* Specialties */}
        <div
          style={{
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: 16,
          }}
        >
          {agent.specialties.map((specialty) => (
            <Tag key={specialty} color="blue" style={{ padding: "2px 8px" }}>
              {specialty}
            </Tag>
          ))}
        </div>

        {/* Stats & Contact */}
        <div style={{ width: "100%", marginBottom: 16 }}>
          {/* Experience */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 8,
              fontSize: 14,
            }}
          >
            <Award size={16} color="#666" />
            <span>{agent.yearsExperience} years experience</span>
          </div>

          {/* Email */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 8,
              fontSize: 14,
            }}
          >
            <Mail size={16} color="#666" />
            <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>
              {agent.email}
            </span>
          </div>

          {/* Phone */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: 14,
            }}
          >
            <Phone size={16} color="#666" />
            <span>{agent.phone}</span>
          </div>
        </div>

        {/* Button */}
        <Button
          type="primary"
          block
          onClick={handleViewProfile}
          style={{
            height: 40,
            fontWeight: 600,
          }}
        >
          View Profile
        </Button>
      </div>
    </Card>
  );
}
