import { getRepos, getUser } from "@/services/github";
import { Repo, User } from "@/types/github";
import { useState } from "react";

export const useGitHubUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchUserData = async (username: string) => {
    if (!username) {
      return;
    }
    try {
      setLoading(true);
      setError("");
      setUser(null);
      setRepos([]);

      const userData = await getUser(username);
      const repoData = await getRepos(username);

      setUser(userData);
      setRepos(repoData);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { user, repos, loading, error, fetchUserData };
};
