"use client";
import ErrorMessage from "@/components/ErrorMessage";
import Loader from "@/components/Loader";
import RepoList from "@/components/RepoList";
import SearchBar from "@/components/SearchBar";
import UserCard from "@/components/UserCart";
import { useGitHubUser } from "@/hooks/useGithubUser";

export default function Home() {
  const { user, repos, loading, error, fetchUserData } = useGitHubUser();

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0D1117] via-[#0A0E13] to-[#0D1117]">
      {/* Animated background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#3B82F6] opacity-5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#2BA14B] opacity-5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-8 md:py-12 lg:py-16">
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-12 animate-fadeIn">
          <div className="inline-flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#3B82F6] to-[#2BA14B] rounded-xl flex items-center justify-center shadow-lg">
              {/* <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.26.82-.58 0-.287-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.73.082-.73 1.205.085 1.838 1.237 1.838 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.123-.3-.535-1.52.117-3.16 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.653 1.64.24 2.86.118 3.16.768.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.62-5.476 5.92.43.37.824 1.102.824 2.22 0 1.602-.015 2.894-.015 3.287 0 .322.216.698.83.578C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
              </svg> */}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#3B82F6] via-[#E6EDF3] to-[#2BA14B] bg-clip-text text-transparent">
              GitHub Explorer
            </h1>
          </div>
          <p className="text-[#8B949E] text-sm md:text-base mt-2">
            Discover GitHub profiles, repositories, and developer insights
          </p>
        </div>

        {/* Search Section */}
        <div className="flex justify-center mb-10 md:mb-12">
          <SearchBar onSearch={fetchUserData} />
        </div>

        {/* Content Section */}
        <div className="space-y-6">
          {loading && <Loader />}
          
          {error && <ErrorMessage message={error} />}
          
          {user && (
            <div className="transform transition-all duration-500 animate-slideUp">
              <UserCard user={user} />
            </div>
          )}
          
          {repos.length > 0 && (
            <div className="transform transition-all duration-500 animate-slideUp animation-delay-200">
              <RepoList repos={repos} />
            </div>
          )}

          {/* Empty State */}
          {!loading && !user && !error && (
            <div className="text-center py-16 animate-fadeIn">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-[#161B22] rounded-2xl mb-4 border border-[#30363D]">
                <svg className="w-12 h-12 text-[#8B949E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-[#E6EDF3] text-lg font-semibold mb-2">No user searched yet</h3>
              <p className="text-[#8B949E] text-sm">Enter a GitHub username above to get started</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}