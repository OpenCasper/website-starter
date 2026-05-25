/** @type {import('next-sitemap').IConfig} */
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.invalid";

module.exports = {
  // Placeholder-safe by default. Replace NEXT_PUBLIC_SITE_URL only after an approved staging or production URL exists.
  siteUrl,
  generateRobotsTxt: true,
  outDir: "public",
  exclude: ["/server-sitemap.xml"],
};
