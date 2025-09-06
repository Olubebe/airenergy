"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
export const SignOutButton = () => {
  const router = useRouter();
  const signout = async () =>
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => router.push("/login"),
      },
    });
  return (
    <Button onClick={signout} variant="outline" className="cursor-pointer">
      Sign Out
    </Button>
  );
};
