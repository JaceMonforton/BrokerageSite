import type {Agent} from '../data/mockData'
import {  mockProperties } from '../data/mockData';
import { PropertyCard } from './PropertyCard';
import { Card, Button, Tag } from 'antd';
import { Mail, Phone, Award, Building2, CheckCircle } from 'lucide-react';
import { Image } from 'antd';

interface AgentPageProps {
  agent: Agent;
}

export function AgentPage({ agent }: AgentPageProps) {
  const agentProperties = mockProperties.filter(p => p.agentId === agent.id);
  const activeListings = agentProperties.filter(p => p.status === 'For Sale').length;
  const pendingListings = agentProperties.filter(p => p.status === 'Pending').length;

  return (
    <div style={{ minHeight: '100vh', background: '#f5f5f5' }}>
      
      {/* Header */}
      <section style={{ background: '#fff', borderBottom: '1px solid #eee' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '48px 16px' }}>
          <div style={{ display: 'flex', flexDirection: 'row', gap: 32, alignItems: 'flex-start', flexWrap: 'wrap' }}>
            
            {/* Profile Image */}
            <div
              style={{
                width: 192,
                height: 192,
                overflow: 'hidden',
                borderRadius: '50%',
                flexShrink: 0,
              }}
            >
              <Image
                src={agent.photo}
                alt={agent.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Agent Info */}
            <div style={{ flex: 1, minWidth: 280 }}>
              <div style={{ marginBottom: 16 }}>
                <h1 style={{ marginBottom: 8 }}>{agent.name}</h1>
                <p style={{ color: '#777', marginBottom: 16 }}>{agent.title}</p>

                {/* Specialties */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
                  {agent.specialties.map((specialty) => (
                    <Tag
                      key={specialty}
                      color="blue"
                      style={{ padding: '4px 10px', borderRadius: 6, fontSize: 12 }}
                    >
                      {specialty}
                    </Tag>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: 16,
                  marginBottom: 24,
                }}
              >
                {/* Experience */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      background: 'rgba(0,123,255,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Award size={24} color="#1677ff" />
                  </div>
                  <div>
                    <p style={{ color: '#777', fontSize: 13 }}>Experience</p>
                    <p>{agent.yearsExperience} Years</p>
                  </div>
                </div>

                {/* Total Sales */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      background: 'rgba(0,123,255,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Building2 size={24} color="#1677ff" />
                  </div>
                  <div>
                    <p style={{ color: '#777', fontSize: 13 }}>Total Sales</p>
                    <p>{agent.totalSales} Properties</p>
                  </div>
                </div>

                {/* Active Listings */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      background: 'rgba(0,123,255,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <CheckCircle size={24} color="#1677ff" />
                  </div>
                  <div>
                    <p style={{ color: '#777', fontSize: 13 }}>Active Listings</p>
                    <p>{activeListings} Properties</p>
                  </div>
                </div>
              </div>

              {/* Contact Buttons */}
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Button
                  type="primary"
                  icon={<Mail size={16} />}
                  style={{ height: 40, borderRadius: 8 }}
                >
                  {agent.email}
                </Button>

                <Button
                  icon={<Phone size={16} />}
                  style={{ height: 40, borderRadius: 8 }}
                >
                  {agent.phone}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section style={{ padding: '48px 16px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <Card style={{ borderRadius: 12 }}>
            <div style={{ padding: 32 }}>
              <h2 style={{ marginBottom: 16 }}>About {agent.name.split(' ')[0]}</h2>
              <p style={{ color: '#777', lineHeight: 1.6 }}>{agent.bio}</p>
            </div>
          </Card>
        </div>
      </section>

      {/* Listings */}
      <section style={{ padding: '48px 16px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ marginBottom: 24 }}>
            <h2 style={{ marginBottom: 8 }}>Current Listings</h2>
            <p style={{ color: '#777' }}>
              {activeListings} active {activeListings === 1 ? 'listing' : 'listings'} | {pendingListings} pending
            </p>
          </div>

          {agentProperties.length > 0 ? (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: 24,
              }}
            >
              {agentProperties.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          ) : (
            <Card style={{ borderRadius: 12, textAlign: 'center' }}>
              <div style={{ padding: 48 }}>
                <Building2 size={48} color="#aaa" style={{ marginBottom: 16 }} />
                <p style={{ color: '#777' }}>No current listings available</p>
              </div>
            </Card>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section style={{ padding: '48px 16px', background: '#1677ff', color: 'white' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ marginBottom: 16 }}>Ready to Work Together?</h2>
          <p style={{ marginBottom: 32, maxWidth: 600, marginInline: 'auto' }}>
            Contact {agent.name.split(' ')[0]} today to discuss your real estate needs.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
            <Button
              size="large"
              style={{
                background: '#fff',
                color: '#1677ff',
                borderRadius: 8,
                height: 44,
                fontWeight: 600,
              }}
            >
              Schedule a Consultation
            </Button>

            <Button
              size="large"
              style={{
                background: 'rgba(255,255,255,0.15)',
                border: '1px solid rgba(255,255,255,0.4)',
                color: '#fff',
                borderRadius: 8,
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
