import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import * as schema from "@/lib/schema";

const sqlite = new Database("db.sqlite");
export const db = drizzle(sqlite, { schema, logger: true });
