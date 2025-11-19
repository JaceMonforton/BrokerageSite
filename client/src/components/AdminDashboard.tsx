import { useState } from "react";
import type { Agent} from "../data/mockData";
import {mockAgents } from "../data/mockData"
import { Card, Button, Input, Modal, Tag } from "antd";
import { Plus, Trash2, Mail, Phone, Award, Edit } from "lucide-react";
import { Image } from "antd";

interface AdminDashboardProps {
  onViewAgent: (agent: Agent) => void;
}

export function AdminDashboard({ onViewAgent }: AdminDashboardProps) {
  const [agents, setAgents] = useState<Agent[]>(mockAgents);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const [newAgent, setNewAgent] = useState({
    name: "",
    email: "",
    phone: "",
    title: "",
    bio: "",
    specialties: "",
    yearsExperience: "",
  });

  const handleAddAgent = () => {
    setIsAddDialogOpen(false);
    setNewAgent({
      name: "",
      email: "",
      phone: "",
      title: "",
      bio: "",
      specialties: "",
      yearsExperience: "",
    });
  };

  const handleDeleteAgent = (agentId: string) => {
    setAgents(agents.filter((agent) => agent.id !== agentId));
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f5f5f5", padding: "32px 16px" }}>
      <div style={{ width: '100%', margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: 32 }}>
          <h1 style={{ marginBottom: 8 }}>Admin Dashboard</h1>
          <p style={{ color: "#6b7280" }}>
            Manage your brokerage agents and their profiles
          </p>
        </div>

        {/* Stats Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 24,
            marginBottom: 32,
          }}
        >
          <Card>
            <h3>Total Agents</h3>
            <p style={{ color: "#1677ff", fontSize: 24, marginTop: 8 }}>
              {agents.length}
            </p>
          </Card>

          <Card>
            <h3>Total Sales</h3>
            <p style={{ color: "#1677ff", fontSize: 24, marginTop: 8 }}>
              {agents.reduce((sum, a) => sum + a.totalSales, 0)}
            </p>
          </Card>

          <Card>
            <h3>Avg Experience</h3>
            <p style={{ color: "#1677ff", fontSize: 20, marginTop: 8 }}>
              {Math.round(
                agents.reduce((sum, a) => sum + a.yearsExperience, 0) /
                  agents.length
              )}{" "}
              years
            </p>
          </Card>
        </div>

        {/* Manage Agents */}
        <Card>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 24,
            }}
          >
            <div>
              <h2 style={{ marginBottom: 4 }}>Manage Agents</h2>
              <p style={{ color: "#6b7280" }}>
                Add, edit, or remove agents from your brokerage
              </p>
            </div>

            <Button
              type="primary"
              onClick={() => setIsAddDialogOpen(true)}
              icon={<Plus size={16} style={{ marginRight: 6 }} />}
            >
              Add Agent
            </Button>
          </div>

          {/* Agent List */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {agents.map((agent) => (
              <div
                key={agent.id}
                style={{
                  padding: 16,
                  border: "1px solid #e5e7eb",
                  borderRadius: 8,
                  display: "flex",
                  gap: 16,
                  alignItems: "center",
                  background: "#fff",
                }}
              >
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    overflow: "hidden",
                    flexShrink: 0,
                  }}
                >
                  <Image
                    src={agent.photo}
                    alt={agent.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>

                {/* Agent Info */}
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: 8,
                    }}
                  >
                    <div>
                      <h3 style={{ marginBottom: 4 }}>{agent.name}</h3>
                      <p style={{ color: "#6b7280", fontSize: 14 }}>{agent.title}</p>
                    </div>

                    <div style={{ display: "flex", gap: 8 }}>
                      <Button
                        size="small"
                        onClick={() => onViewAgent(agent)}
                        icon={<Edit size={14} />}
                      />

                      <Button
                        danger
                        size="small"
                        onClick={() => handleDeleteAgent(agent.id)}
                        icon={<Trash2 size={14} />}
                      />
                    </div>
                  </div>

                  {/* Specialties */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 12 }}>
                    {agent.specialties.map((s) => (
                      <Tag key={s} color="blue">
                        {s}
                      </Tag>
                    ))}
                  </div>

                  {/* Contact */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 16,
                      color: "#6b7280",
                      fontSize: 14,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                      <Mail size={14} />
                      {agent.email}
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                      <Phone size={14} />
                      {agent.phone}
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                      <Award size={14} />
                      {agent.yearsExperience} years | {agent.totalSales} sales
                    </div>
                  </div>

                  <p style={{ marginTop: 8, color: "#6b7280", fontSize: 14 }}>
                    Extension:{" "}
                    <span style={{ color: "#1677ff", fontFamily: "monospace" }}>
                      premierrealty.com/{agent.extension}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* ADD AGENT MODAL */}
      <Modal
        title="Add New Agent"
        open={isAddDialogOpen}
        onCancel={() => setIsAddDialogOpen(false)}
        onOk={handleAddAgent}
        okText="Create Agent Profile"
        width={600}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div>
              <label>Full Name</label>
              <Input
                placeholder="John Doe"
                value={newAgent.name}
                onChange={(e) =>
                  setNewAgent({ ...newAgent, name: e.target.value })
                }
              />
            </div>

            <div>
              <label>Title</label>
              <Input
                placeholder="Real Estate Agent"
                value={newAgent.title}
                onChange={(e) =>
                  setNewAgent({ ...newAgent, title: e.target.value })
                }
              />
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div>
              <label>Email</label>
              <Input
                type="email"
                placeholder="example@premier.com"
                value={newAgent.email}
                onChange={(e) =>
                  setNewAgent({ ...newAgent, email: e.target.value })
                }
              />
            </div>

            <div>
              <label>Phone</label>
              <Input
                placeholder="(555) 123-4567"
                value={newAgent.phone}
                onChange={(e) =>
                  setNewAgent({ ...newAgent, phone: e.target.value })
                }
              />
            </div>
          </div>

          <div>
            <label>Years of Experience</label>
            <Input
              type="number"
              placeholder="5"
              value={newAgent.yearsExperience}
              onChange={(e) =>
                setNewAgent({ ...newAgent, yearsExperience: e.target.value })
              }
            />
          </div>

          <div>
            <label>Specialties (comma-separated)</label>
            <Input
              placeholder="Luxury Homes, Residential"
              value={newAgent.specialties}
              onChange={(e) =>
                setNewAgent({ ...newAgent, specialties: e.target.value })
              }
            />
          </div>

          <div>
            <label>Bio</label>
            <Input.TextArea
              rows={4}
              placeholder="Tell us about this agent..."
              value={newAgent.bio}
              onChange={(e) =>
                setNewAgent({ ...newAgent, bio: e.target.value })
              }
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}
