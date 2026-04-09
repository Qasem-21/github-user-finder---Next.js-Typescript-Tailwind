"use client";
import { useState, KeyboardEvent } from "react";

export default function SearchBar({
  onSearch,
}: {
  onSearch: (username: string) => void;
}) {
  const [username, setUsername] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = () => {
    if (username.trim()) {
      onSearch(username.trim());
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="w-full max-w-2xl">
      <div className={`
        relative flex items-center gap-2 
        bg-gray-900 rounded-full p-1 
        border-2 transition-all duration-300
        ${isFocused 
          ? 'border-blue-500 shadow-glow-blue' 
          : 'border-gray-700 hover:border-gray-500'
        }
      `}>
        {/* Search Icon */}
        <div className="pl-4">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Input Field */}
        <input
          type="text"
          placeholder="Enter GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyPress={handleKeyPress}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="flex-1 bg-transparent text-gray-100 placeholder:text-gray-500 outline-none py-3 text-base"
        />

        {/* Search Button */}
        <button
          onClick={handleSearch}
          disabled={!username.trim()}
          className={`
            px-6 py-2 rounded-full font-semibold transition-all duration-300
            ${username.trim() 
              ? 'bg-blue-500 hover:bg-blue-600 hover:scale-105 active:scale-95 cursor-pointer shadow-lg hover:shadow-blue-500/30 text-white' 
              : 'bg-gray-700 text-gray-500 cursor-not-allowed'
            }
          `}
        >
          Search
        </button>
      </div>
    </div>
  );
}