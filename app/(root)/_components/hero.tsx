"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import LogoBlack from "@/public/logo/logo-black.svg";
import LogoWhite from "@/public/logo/logo-white.svg";
import SimonLeeHand from "@/public/simon-lee-hand.png";
import Image from "next/image";
import { useConvexAuth } from "convex/react";
import { Spinner } from "@/components/spinner";
import Link from "next/link";
import { SignInButton } from "@clerk/clerk-react";
import MainNote from "@/public/main.png";

export const Hero = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <div className="max-w-4xl space-y-4 ">
      <div className="flex items-center justify-center mb-20">
        <Image
          src={LogoBlack}
          alt="Ethereal notes hero image"
          width={200}
          height={300}
          quality={95}
          className="object-contain dark:hidden"
        />

        <Image
          src={LogoWhite}
          alt="Ethereal notes hero image"
          width={200}
          height={300}
          quality={95}
          className="object-contain hidden dark:block"
        />
      </div>

      <h1 className="text-3xl sm:text-5xl md:text-6xl ">
        <span className="font-bold">Ethereal Notes,</span>
        Where Productivity Meets Elegance...Inspire, Create, Collaborate
      </h1>

      <br />
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild size={"lg"}>
          <Link href="/documents">
            Get started
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}

      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal" afterSignInUrl="/">
          <Button size={"lg"}>
            Sign in
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </SignInButton>
      )}

      <br />
      <div className="flex md:flex-row flex-col sm:py-16 py-6 gap-6">
        <Image
          src={SimonLeeHand}
          alt="Ethereal notes Hero image"
          width={350}
          height={500}
          quality={95}
        />

        <div className="flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6">
          <p className=" text-left text-3xl sm:text-3xl">
            Ethereal Notes takes your organization and creativity to new
            heights. Whether you're a student, professional, or creative
            thinker, our platform provides a seamless space for capturing ideas,
            managing tasks, and collaborating with others
          </p>
        </div>
      </div>

      <br />

      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold ">Overview</h1>

      <div className="flex md:flex-row flex-col sm:py-16 py-6 gap-6">
        <div className="flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6">
          <p className=" text-left text-3xl sm:text-3xl">
            Step into a realm where productivity meets innovation. Ethereal
            Notes redefines how you capture, organize, and utilize your ideas,
            promising a future-forward approach to managing information and
            enhancing workflows. Elevate your productivity effortlessly with
            Ethereal Notes
          </p>
        </div>

        <Image
          src={MainNote}
          alt="Ethereal notes Hero image"
          width={420}
          height={400}
          quality={100}
        />
      </div>
    </div>
  );
};
