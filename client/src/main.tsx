import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "antd/dist/reset.css"; // AntD reset
import { ConfigProvider } from "antd";

// Optional: theme overrides
const theme = {
  token: {
    colorPrimary: "#1677ff",
    borderRadius: 8,
    fontFamily: "Inter, sans-serif"
  }
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider theme={theme}>
        <App />
    </ConfigProvider>
  </React.StrictMode>
);
