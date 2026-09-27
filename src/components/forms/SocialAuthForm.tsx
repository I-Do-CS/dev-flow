"use client";

import Image from "next/image";
import { signIn } from "next-auth/react";

import ROUTES from "@/constants/routes";

import { Button } from "../ui/button";
import { toast } from "../ui/toast";

const SocialAuthForm = () => {
  const buttonClass =
    "min-h-12 flex-1 rounded-2 background-dark400_light900 px-4 py-3.5 body-medium text-dark200_light800 cursor-pointer";

  const handleSignIn = async (provider: "google" | "github") => {
    try {
      await signIn(provider, {
        callbackUrl: ROUTES.HOME,
        redirect: true,
      });
    } catch (error) {
      console.log(error);
      toast.add({
        title: "Sign In failed",
        description:
          error instanceof Error
            ? error.message
            : "An error occured during sign-in",
      });
    }
  };

  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button onClick={() => handleSignIn("github")} className={buttonClass}>
        <Image
          src="/icons/github.svg"
          alt="Github Logo"
          width={20}
          height={20}
          className="mr-2.5 object-contain invert-colors"
        />
        <span>Log in with GitHub</span>
      </Button>

      <Button onClick={() => handleSignIn("google")} className={buttonClass}>
        <Image
          src="/icons/google.svg"
          alt="Google Logo"
          width={20}
          height={20}
          className="mr-2.5 object-contain"
        />
        <span>Log in with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;
