import { Repo } from "@/types/github";

export default function RepoList({ repos }: { repos: Repo[] }) {
  return (
    <div className="bg-[#161B22] border border-[#30363D] rounded-2xl p-6 mt-6 animate-fadeIn">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#30363D]">
        <svg className="w-6 h-6 text-[#3B82F6]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.26.82-.58 0-.287-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.73.082-.73 1.205.085 1.838 1.237 1.838 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.123-.3-.535-1.52.117-3.16 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.653 1.64.24 2.86.118 3.16.768.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.62-5.476 5.92.43.37.824 1.102.824 2.22 0 1.602-.015 2.894-.015 3.287 0 .322.216.698.83.578C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
        </svg>
        <h3 className="text-xl font-bold text-[#E6EDF3]">
          Repositories
          <span className="ml-2 text-sm font-normal text-[#8B949E]">
            ({repos.length})
          </span>
        </h3>
      </div>

      {/* Repositories List */}
      <div className="space-y-3">
        {repos.map((repo) => (
          <a
            key={repo.id}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-[#21262D] border border-[#30363D] rounded-xl hover:border-[#3B82F6] transition-all duration-300 hover:shadow-lg group"
          >
            {/* Left side - Repo Name */}
            <div className="flex-1">
              <h4 className="text-white font-semibold text-base group-hover:underline">
                {repo.name}
              </h4>
            </div>

            {/* Right side - Stars and Language */}
            <div className="flex items-center gap-4">
              {/* Stars */}
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-[#D29922]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <span className="text-[#E6EDF3] text-sm font-medium">
                  {repo.stargazers_count}
                </span>
              </div>

              {/* Language */}
              {repo.language && (
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#3B82F6]" />
                  <span className="text-[#8B949E] text-sm">{repo.language}</span>
                </div>
              )}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}