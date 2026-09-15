import { env } from "cloudflare:workers";
import type { Activity } from "@/components/contribution-graph";

export async function useGitHubAPI<T>(url: string, cacheKey: string, cacheTtl: number = 3600, useAuth: boolean = true): Promise<T | null> {
    const kv = env.GITHUB_KV;

    try {
        const cachedData = await kv.get(cacheKey, { type: 'json' });
        if (cachedData) {
            console.log(`Cache hit for: ${cacheKey}`);
            return cachedData as T;
        }
        console.log(`Cache miss for: ${cacheKey}`);
    
        const response = useAuth ? await fetch(url, {
            headers: {
                'Authorization': `Bearer ${env.GITHUB_API_TOKEN}`,
                'User-Agent': 'neosubhamoy-website'
            }
        }) : await fetch(url);

        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        const data = await response.json() as T;

        await kv.put(cacheKey, JSON.stringify(data), { expirationTtl: cacheTtl });
        console.log(`Cache set for: ${cacheKey} with duration: ${cacheTtl} seconds`);

        return data;
    } catch (error) {
        console.error("GitHub API Error:", error);
        return null;
    }
}

export interface GitHubRepo {
    id: number;
    name: string;
    full_name: string;
    description: string;
    homepage: string;
    stargazers_count: number;
    forks_count: number;
    watchers_count: number;
    html_url: string;
    language: string;
    default_branch: string;
}

export async function getRepo(repo: string): Promise<GitHubRepo | null> {
    const url = `https://api.github.com/repos/${repo}`;
    const cacheKey = `repo_${repo.replace('/', '_')}`;
    return await useGitHubAPI<GitHubRepo>(url, cacheKey);
}

interface GitHubCommitRef {
    ref: string;
    node_id: string;
    url: string;
    object: {
        sha: string;
        type: string;
        url: string;
    };
}

export async function getLatestCommit(repo: string, branch: string): Promise<GitHubCommitRef | null> {
    const url = `https://api.github.com/repos/${repo}/git/ref/heads/${branch}`;
    const cacheKey = `repo_commit_${repo.replace('/', '_')}_${branch}`;
    return await useGitHubAPI<GitHubCommitRef>(url, cacheKey);
}

interface GitHubContributionsResponse {
    contributions: Activity[]
}

export async function getContributions(username: string): Promise<GitHubContributionsResponse | null> {
    const url = `https://github-contributions-api.jogruber.de/v4/${username}?y=last`;
    const cacheKey = `contributions_${username}`;
    return await useGitHubAPI<GitHubContributionsResponse>(url, cacheKey, 86400, false);
}