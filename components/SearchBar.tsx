"use client";

import { useState } from "react";

export default function SearchBar({  onSearch,}: {
  onSearch: (username: string) => void;
}) {
  const [username, setUsername] = useState("");

  return (
    <div style={{ marginBottom: 20 }}>
      <input
        type="text"
        placeholder="Enter GitHub username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={() => onSearch(username)}>Search</button>
    </div>
  );
}