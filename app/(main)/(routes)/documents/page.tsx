"use client";

import React from "react";
import SimonLeeHand from "@/public/simon-lee-hand.png";
import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
const DocumentsPage = () => {
  const { user } = useUser();
  const router = useRouter();
  // Creating new note
  const create = useMutation(api.documents.create);
  const onCreate = () => {
    const promise = create({ title: "Untitled" }).then((documentId) =>
      router.push(`/documents/${documentId}`)
    );

    toast.promise(promise, {
      loading: "Creating a new note...",
      success: "New note created successfully!",
      error: "Error,failed to create a new note.",
    });
  };
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src={SimonLeeHand}
        width={200}
        height={200}
        quality={95}
        alt="Simon lee Hand"
      />

      <h1 className="text-lg font-medium">
        {user?.firstName}&apos;s Ethereal Notes
      </h1>

      <Button onClick={onCreate}>
        <PlusCircle className="h-4 w-4 mr-2" />
        Create a note
      </Button>
    </div>
  );
};

export default DocumentsPage;
