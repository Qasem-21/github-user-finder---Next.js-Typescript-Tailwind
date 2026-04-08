import { Repo } from "@/types/github";

export default function RepoList({ repos }: { repos: Repo[] }) {
  return (
    <div>
      <h3>Repositories</h3>

      {repos.map((repo) => (
        <div
          key={repo.id}
          style={{
            borderBottom: "1px solid gray",
            padding: 10,
          }}
        >
          <h4>{repo.name}</h4>
          <p>⭐ {repo.stargazers_count}</p>
          <p>{repo.language}</p>
        </div>
      ))}
    </div>
  );
}