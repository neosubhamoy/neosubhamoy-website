/// <reference path="../.astro/types.d.ts" />

type Env = {
	GITHUB_KV: KVNamespace;
	GITHUB_API_TOKEN: string;
};

type Runtime = import("@astrojs/cloudflare").Runtime<Env>;

declare namespace App {
	interface Locals extends Runtime {}
}
