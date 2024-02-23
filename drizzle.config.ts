import config from "@/lib/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./lib/schema.ts",
  out: "./drizzle",
  driver: "better-sqlite",
  dbCredentials: {
    url: config.DATABASE_URL,
  },
  verbose: true,
  strict: true,
});
