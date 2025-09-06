import { Button } from "@/components/ui/button";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

const LandingPage = async () => {
  const session = await getSession();
  if (session) redirect("/dashboard");
  return (
    <div>
      <h2>npx drizzle-kit migrate</h2>
      <div>
        <Link href="/login">
          <Button>Login</Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
