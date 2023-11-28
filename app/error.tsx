"use client";

import { Button } from "@/components/ui/button";
import ErrorImageBlack from "@/public/error/error-black.png";
import ErrorImageWhite from "@/public/error/error-white.png";
import Image from "next/image";
import Link from "next/link";

const Error = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src={ErrorImageBlack}
        height="300"
        width="300"
        alt="Error"
        className="dark:hidden"
      />
      <Image
        src={ErrorImageWhite}
        height="300"
        width="300"
        alt="Error"
        className="hidden dark:block"
      />
      <h1 className="text-3xl font-medium">Something went wrong!</h1>

      <Button asChild>
        <Link href="/documents">Go back</Link>
      </Button>
    </div>
  );
};

export default Error;
