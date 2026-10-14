const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  ...(isGitHubActions && repoName
    ? { basePath: `/${repoName}`, assetPrefix: `/${repoName}/` }
    : {}),
};

export default nextConfig;
