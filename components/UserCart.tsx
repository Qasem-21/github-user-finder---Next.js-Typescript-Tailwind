import { User } from "@/types/github";

export default function UserCard({ user }: { user: User }) {
  return (
    <div className="bg-[#161B22] border border-[#30363D] rounded-2xl p-6 mb-6 mt-4 transition-all duration-300 hover:shadow-xl hover:border-[#3B82F6]/50 animate-fadeIn">
      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
        {/* Avatar */}
        <div className="relative group">
          <div className="absolute inset-0 rounded-full bg-[#3B82F6] opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-md" />
          <img
            src={user.avatar_url}
            alt={user.login}
            width={100}
            height={100}
            className="w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-[#30363D] group-hover:border-[#3B82F6] transition-all duration-300"
          />
        </div>

        {/* User Info */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-[#E6EDF3] mb-2">
            {user.login}
          </h2>
          
          {user.bio && (
            <p className="text-[#8B949E] text-sm md:text-base mb-4 leading-relaxed">
              {user.bio}
            </p>
          )}

          {/* Stats */}
          <div className="flex gap-6 justify-center md:justify-start">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="text-[#E6EDF3] font-semibold">
                {user.followers.toLocaleString()}
              </span>
              <span className="text-[#8B949E] text-sm">followers</span>
            </div>
            
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#2BA14B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
              <span className="text-[#E6EDF3] font-semibold">
                {user.public_repos.toLocaleString()}
              </span>
              <span className="text-[#8B949E] text-sm">repositories</span>
            </div>
          </div>
        </div>

        {/* GitHub Link Button */}
        <a
          href={`https://github.com/${user.login}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-[#21262D] hover:bg-[#30363D] rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 inline-flex items-center gap-2 border border-[#30363D] whitespace-nowrap"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.26.82-.58 0-.287-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.73.082-.73 1.205.085 1.838 1.237 1.838 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.123-.3-.535-1.52.117-3.16 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.653 1.64.24 2.86.118 3.16.768.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.62-5.476 5.92.43.37.824 1.102.824 2.22 0 1.602-.015 2.894-.015 3.287 0 .322.216.698.83.578C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          View Profile
        </a>
      </div>
    </div>
  );
}