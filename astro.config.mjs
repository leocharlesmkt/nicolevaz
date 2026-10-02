import { defineConfig } from "astro/config";
const site =
  process.env.SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.CF_PAGES_URL);
export default defineConfig({
  site,
  output: "static",
  devToolbar: { enabled: false },
  trailingSlash: "always",
  build: { inlineStylesheets: "always" },
});
