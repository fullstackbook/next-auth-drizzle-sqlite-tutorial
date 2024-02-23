import { ReactNode } from "react";
import SessionProvider from "@/components/session-provider";
import { auth } from "@/lib/auth";

export default async function Layout({ children }: { children: ReactNode }) {
  const session = await auth();
  console.log(session);
  return (
    <SessionProvider session={session}>
      <div>{children}</div>
    </SessionProvider>
  );
}
