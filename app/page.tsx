import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Next.js, Auth.js, Drizzle ORM, SQLite, Tutorial</h1>
      <Link href="/signin">Sign In</Link>
    </div>
  );
}
