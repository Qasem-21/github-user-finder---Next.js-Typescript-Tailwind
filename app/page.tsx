"use client";

import ErrorMessage from "@/components/ErrorMessage";
import Loader from "@/components/Loader";
import RepoList from "@/components/RepoList";
import SearchBar from "@/components/SearchBar";
import UserCard from "@/components/UserCart";
import { useGitHubUser } from "@/hooks/useGithubUser";
import Image from "next/image";

export default function Home() {
  const { user, repos, loading, error, fetchUserData } = useGitHubUser();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-8 md:py-12 bg-gradient-to-br from-gray-50 to-indigo-50/30">
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-center mb-8 md:mb-10">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent inline-flex items-center gap-2">
            GitHub User Search <span className="text-2xl md:text-3xl">🔍</span>
          </h1>
          <p className="text-gray-500 mt-2 text-sm md:text-base">Discover GitHub profiles and repositories</p>
        </div>

        <div className="flex justify-center mb-8">
          <SearchBar onSearch={fetchUserData} />
        </div>

        <div className="flex flex-col items-center">
          {loading && <Loader />}
          {error && <ErrorMessage message={error} />}

          {user && (
            <div className="w-full mb-6">
              <UserCard user={user} />
            </div>
          )}
          {repos.length > 0 && (
            <div className="w-full">
              <RepoList repos={repos} />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}