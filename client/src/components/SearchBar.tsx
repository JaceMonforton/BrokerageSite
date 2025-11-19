import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Select, Input, Button } from "antd";
import { Search } from "lucide-react";

interface SearchBarProps {
  variant?: "default" | "hero";
}

export function SearchBar({ variant = "hero" }: SearchBarProps) {
  const navigate = useNavigate();
  const [searchType, setSearchType] = useState<string>("property");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchType === "office") navigate("/offices");
    else if (searchType === "agent") navigate("/agents");
    else navigate("/listings");
  };

  const isHero = variant === "hero";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 12,
        maxWidth: isHero ? 900 : undefined,
        margin: isHero ? "0 auto" : undefined,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: isHero ? "row" : undefined,
          gap: 12,
        }}
      >
        {/* SELECT */}
        <Select
          value={searchType}
          onChange={setSearchType}
          style={{
            width: isHero ? 180 : 160,
            height: isHero ? 48 : 40,
            background: isHero ? "#fff" : undefined,
          }}
          options={[
            { value: "property", label: "Property" },
            { value: "agent", label: "Agent" },
            { value: "office", label: "Office" },
          ]}
        />

        {/* SEARCH INPUT */}
        <div style={{ position: "relative", flex: 1 }}>
          <Search
            size={20}
            style={{
              position: "absolute",
              left: 12,
              top: "50%",
              transform: "translateY(-50%)",
              color: "#8c8c8c",
              zIndex: 10,
            }}
          />

          <Input
            placeholder={
              searchType === "office"
                ? "Enter city or postal code..."
                : searchType === "agent"
                ? "Enter agent name..."
                : "Enter address, city, or postal code..."
            }
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onPressEnter={handleSearch}
            style={{
              paddingLeft: 40,
              height: isHero ? 48 : 40,
              background: isHero ? "#fff" : undefined,
            }}
          />
        </div>

        {/* BUTTON */}
        <Button
          type="primary"
          onClick={handleSearch}
          style={{
            height: isHero ? 48 : 40,
            paddingInline: isHero ? 28 : undefined,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Search size={18} style={{ marginRight: 6 }} />
          Search
        </Button>
      </div>
    </div>
  );
}
