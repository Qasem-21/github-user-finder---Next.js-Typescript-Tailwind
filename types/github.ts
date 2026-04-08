export interface User {
  login: string;
  avatar_url: string;
  bio: string;
  followers: number;
  public_repos: number;
}

export interface Repo {
  id: number;
  name: string;
  stargazers_count: number;
  language: string;
}