import { useState } from "react";
import { mockAgents, mockOffices } from "../data/mockData";
import { AgentCard } from "./AgentCard";
import { SearchBar } from "./SearchBar";
import { Select } from "antd";

export function AgentsDirectory() {
  const [selectedOffice, setSelectedOffice] = useState<string>("all");

  const filteredAgents =
    selectedOffice === "all"
      ? mockAgents
      : mockAgents.filter((agent) => agent.officeId === selectedOffice);

  return (
    <div style={{ minHeight: "100vh", background: "rgba(0,0,0,0.03)" }}>
      {/* HERO / HEADER */}
      <section
        style={{
          padding: "64px 0",
          background: "#fff",
          borderBottom: "1px solid #eee",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 16px" }}>
          <div
            style={{
              maxWidth: 700,
              margin: "0 auto",
              textAlign: "center",
              marginBottom: 48,
            }}
          >
            <h1 style={{ marginBottom: 16 }}>Find an Agent</h1>

            <p style={{ marginBottom: 32, color: "rgba(0,0,0,0.45)" }}>
              Connect with one of our experienced real estate professionals
            </p>

            <SearchBar />
          </div>
        </div>
      </section>

      {/* FILTER + GRID */}
      <section style={{ padding: "48px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 16px" }}>
          {/* Header Row */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 32,
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            <div>
              <h2 style={{ marginBottom: 8 }}>{filteredAgents.length} Agents</h2>
              <p style={{ color: "rgba(0,0,0,0.45)" }}>
                Browse our team of professionals
              </p>
            </div>

            <div style={{ width: 260 }}>
              <Select
                value={selectedOffice}
                onChange={setSelectedOffice}
                style={{ width: "100%" }}
                options={[
                  { label: "All Offices", value: "all" },
                  ...mockOffices.map((o) => ({
                    label: o.city,
                    value: o.id,
                  })),
                ]}
                placeholder="Filter by Office"
              />
            </div>
          </div>

          {/* Agents Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: 24,
            }}
          >
            {filteredAgents.map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
