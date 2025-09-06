"use client";
import React from "react";
import { Button } from "../ui/button";
import { Github, Loader2 } from "lucide-react";
import { authClient } from "@/lib/auth-client";

const LoginButton = () => {
  const signInWithGithub = async () =>
    await authClient.signIn.social({
      callbackURL: "/dashboard",
      provider: "github",
    });
  return (
    <div className="space-y-4">
      <Button
        onClick={signInWithGithub}
        variant="outline"
        size="lg"
        className="w-full h-11 border-gray-300 hover:bg-gray-50 text-gray-700 cursor-pointer font-medium"
      >
        <Github className="mr-2 h-4 w-4" />
        Continue with GitHub
      </Button>
    </div>
  );
};

export default LoginButton;
