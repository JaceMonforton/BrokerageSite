import React from "react";

interface AgentPageWrapperProps {
  children: React.ReactNode;
  title?: string;
}

export default function AgentPageWrapper({ children, title }: AgentPageWrapperProps) {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 1200,
        margin: "0 auto",
        padding: "32px 24px",
      }}
    >
      {title && (
        <h1 style={{ 
          fontSize: 28, 
          fontWeight: 600, 
          marginBottom: 24 
        }}>
          {title}
        </h1>
      )}

      <div>{children}</div>
    </div>
  );
}
