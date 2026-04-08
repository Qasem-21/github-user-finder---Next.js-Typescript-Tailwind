"use client";

import { useState } from "react";

export default function SearchBar({
  onSearch,
}: {
  onSearch: (username: string) => void;
}) {
  const [username, setUsername] = useState("");

  return (
    <div className="flex gap-4 items-center">
      <input
        type="text"
        placeholder="Enter GitHub username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="px-5 py-3 w-72 rounded-xl border border-indigo-200 bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-gray-700 placeholder:text-gray-400"
      />
      <button
        onClick={() => onSearch(username)}
        className="px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-semibold shadow-md hover:shadow-lg transition-all cursor-pointer"
      >
        Search
      </button>
    </div>
  );
}
