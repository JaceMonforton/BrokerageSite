import { Routes, Route, useParams } from "react-router-dom";
import { mockAgents } from "./data/mockData";
import { AgentPage } from "./components/AgentPage";
import { BrokerageHome } from "./components/BrokerageHome";
import Layout from './components/Layout'
import { AdminDashboard } from "./components/AdminDashboard";
function AgentPageWrapper() {
  const { extension } = useParams();
  const agent = mockAgents.find(a => a.extension === extension);

  if (!agent) {
    return (

        <div style={{ padding: 40 }}>Agent not found</div>
 
    );
  }

  return (

      <AgentPage agent={agent} />

  );
}

export default function App() {
  return (
<Layout>
      <Routes>
        <Route path="/" element={<BrokerageHome />} />
        <Route path="/:extension" element={<AgentPageWrapper />} />
        <Route path="/admin" element={<AdminDashboard />} />

      </Routes>
</Layout>
  );
}
