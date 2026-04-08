import { User } from "@/types/github";

export default function UserCard({ user }: { user: User }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
        marginTop:10,
      }}
    >
      <img
        src={user.avatar_url}
        alt={user.login}
        width={100}
        style={{ borderRadius: "50%" }}
      />

      <h2>{user.login}</h2>
      <p>{user.bio}</p>

      <p>Followers: {user.followers}</p>
      <p>Public repos: {user.public_repos}</p>
    </div>
  );
}
