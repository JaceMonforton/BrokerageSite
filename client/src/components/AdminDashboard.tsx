import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { mockAgents } from "../data/mockData";
import type {Agent} from "../data/mockData";
import {
  Card,
  Button,
  Row,
  Col,
  Input,
  Modal,
  Typography,
} from "antd";

import { Plus, Trash2, Mail, Phone, Award, Edit } from "lucide-react";
import { Image} from "antd";

const { TextArea } = Input;
const { Title, Text } = Typography;

export function AdminDashboard() {
  const navigate = useNavigate();
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

  const handleViewAgent = (agent: Agent) => {
    navigate(`/${agent.extension}`);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f5f5f5", padding: "40px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: 32 }}>
          <Title level={2} style={{ marginBottom: 4 }}>
            Admin Dashboard
          </Title>
          <Text type="secondary">
            Manage your brokerage agents and their profiles
          </Text>
        </div>

        {/* Stats */}
        <Row gutter={[24, 24]} style={{ marginBottom: 32 }}>
          <Col xs={24} md={8}>
            <Card>
              <Title level={4}>Total Agents</Title>
              <Text type="secondary">Active agents in your brokerage</Text>
              <div style={{ fontSize: 24, color: "#1677ff", marginTop: 12 }}>
                {agents.length}
              </div>
            </Card>
          </Col>

          <Col xs={24} md={8}>
            <Card>
              <Title level={4}>Total Sales</Title>
              <Text type="secondary">Combined sales this year</Text>
              <div style={{ fontSize: 24, color: "#1677ff", marginTop: 12 }}>
                {agents.reduce((s, a) => s + a.totalSales, 0)}
              </div>
            </Card>
          </Col>

          <Col xs={24} md={8}>
            <Card>
              <Title level={4}>Avg Experience</Title>
              <Text type="secondary">Average years of experience</Text>
              <div style={{ fontSize: 24, color: "#1677ff", marginTop: 12 }}>
                {Math.round(
                  agents.reduce((s, a) => s + a.yearsExperience, 0) / agents.length
                )}{" "}
                years
              </div>
            </Card>
          </Col>
        </Row>

        {/* Main Agent Management Card */}
        <Card>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 16,
            }}
          >
            <div>
              <Title level={4} style={{ marginBottom: 4 }}>
                Manage Agents
              </Title>
              <Text type="secondary">
                Add, edit, or remove agents from your brokerage
              </Text>
            </div>

            <Button
              type="primary"
              icon={<Plus size={16} />}
              onClick={() => setIsAddDialogOpen(true)}
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
                  display: "flex",
                  gap: 16,
                  padding: 16,
                  border: "1px solid #e5e5e5",
                  borderRadius: 8,
                  background: "#fff",
                }}
              >
                {/* Avatar */}
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
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>

                {/* Details */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: 8,
                    }}
                  >
                    <div>
                      <Title level={5} style={{ marginBottom: 4 }}>
                        {agent.name}
                      </Title>
                      <Text type="secondary">{agent.title}</Text>
                    </div>

                    <div style={{ display: "flex", gap: 8 }}>
                      <Button
                        size="small"
                        onClick={() => handleViewAgent(agent)}
                        icon={<Edit size={14} />}
                      />

                      <Button
                        size="small"
                        danger
                        onClick={() => handleDeleteAgent(agent.id)}
                        icon={<Trash2 size={14} />}
                      />
                    </div>
                  </div>

                  {/* Specialties */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 12 }}>
                    {agent.specialties.map((spec) => (
                      <span
                        key={spec}
                        style={{
                          padding: "4px 8px",
                          background: "#f0f0f0",
                          borderRadius: 4,
                          fontSize: 12,
                        }}
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  {/* Contact Info */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 16,
                      fontSize: 14,
                      color: "#888",
                    }}
                  >
                    <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <Mail size={16} />
                      {agent.email}
                    </span>

                    <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <Phone size={16} />
                      {agent.phone}
                    </span>

                    <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <Award size={16} />
                      {agent.yearsExperience} years | {agent.totalSales} sales
                    </span>
                  </div>

                  <div style={{ marginTop: 8 }}>
                    <Text type="secondary" style={{ fontSize: 13 }}>
                      Extension URL:{" "}
                      <span style={{ color: "#1677ff", fontFamily: "monospace" }}>
                        premierrealty.com/{agent.extension}
                      </span>
                    </Text>
                  </div>
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
        okText="Create Agent"
        width={700}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 16 }}>
          <Row gutter={16}>
            <Col span={12}>
              <Text>Full Name</Text>
              <Input
                placeholder="John Doe"
                value={newAgent.name}
                onChange={(e) =>
                  setNewAgent({ ...newAgent, name: e.target.value })
                }
              />
            </Col>

            <Col span={12}>
              <Text>Title</Text>
              <Input
                placeholder="Real Estate Agent"
                value={newAgent.title}
                onChange={(e) =>
                  setNewAgent({ ...newAgent, title: e.target.value })
                }
              />
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Text>Email</Text>
              <Input
                placeholder="john.doe@premierrealty.com"
                value={newAgent.email}
                onChange={(e) =>
                  setNewAgent({ ...newAgent, email: e.target.value })
                }
              />
            </Col>

            <Col span={12}>
              <Text>Phone</Text>
              <Input
                placeholder="(555) 123-4567"
                value={newAgent.phone}
                onChange={(e) =>
                  setNewAgent({ ...newAgent, phone: e.target.value })
                }
              />
            </Col>
          </Row>

          <div>
            <Text>Years Experience</Text>
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
            <Text>Specialties (comma-separated)</Text>
            <Input
              placeholder="Luxury Homes, Residential"
              value={newAgent.specialties}
              onChange={(e) =>
                setNewAgent({ ...newAgent, specialties: e.target.value })
              }
            />
          </div>

          <div>
            <Text>Bio</Text>
            <TextArea
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
