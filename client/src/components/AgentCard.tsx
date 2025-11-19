import type { Agent } from '../data/mockData';
import { Card, Button, Tag } from 'antd';
import { Mail, Phone, Award } from 'lucide-react';
import { Image } from 'antd';

interface AgentCardProps {
  agent: Agent;
  onViewProfile?: (agent: Agent) => void;
}

export function AgentCard({ agent, onViewProfile }: AgentCardProps) {
  return (
    <Card
      hoverable
      style={{
        width: '100%',
        borderRadius: 12,
        transition: 'box-shadow 0.2s ease',
      }}
      bodyStyle={{ padding: 24 }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        {/* Profile Image */}
        <div
          style={{
            width: 128,
            height: 128,
            borderRadius: '50%',
            overflow: 'hidden',
            marginBottom: 16,
          }}
        >
          <Image
            src={agent.photo}
            alt={agent.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>

        {/* Name + Title */}
        <h3 style={{ marginBottom: 4 }}>{agent.name}</h3>
        <p style={{ color: '#888', marginBottom: 16 }}>{agent.title}</p>

        {/* Specialties */}
        <div
          style={{
            display: 'flex',
            gap: 8,
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginBottom: 16,
          }}
        >
          {agent.specialties.map((specialty) => (
            <Tag
              key={specialty}
              color="blue"
              style={{
                padding: '2px 8px',
                borderRadius: 6,
                fontSize: 12,
              }}
            >
              {specialty}
            </Tag>
          ))}
        </div>

        {/* Info list */}
        <div style={{ width: '100%', marginBottom: 16 }}>
          {/* Experience */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              fontSize: 14,
              marginBottom: 8,
            }}
          >
            <Award size={16} color="#888" />
            <span>{agent.yearsExperience} years experience</span>
          </div>

          {/* Email */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              fontSize: 14,
              marginBottom: 8,
            }}
          >
            <Mail size={16} color="#888" />
            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {agent.email}
            </span>
          </div>

          {/* Phone */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              fontSize: 14,
            }}
          >
            <Phone size={16} color="#888" />
            <span>{agent.phone}</span>
          </div>
        </div>

        {/* View Profile Button */}
        <Button
          type="primary"
          block
          onClick={() => onViewProfile?.(agent)}
          style={{
            borderRadius: 8,
            height: 40,
            fontWeight: 500,
          }}
        >
          View Agent Website
        </Button>
      </div>
    </Card>
  );
}
