"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IKUpload } from "imagekitio-next";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export const UploadMemeButton = () => {
  const uploadInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [displayName, setDisplayName] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    uploadInputRef.current?.click();
    console.log("uploading");
  };
  const [isLoading, setIsLoading] = useState(false);
  const [tags, setTags] = useState("");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Upload Base Meme</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload Your Base Meme Image</DialogTitle>
          <DialogDescription>
            This is the image that other users on the site can build on memes.
          </DialogDescription>
        </DialogHeader>
        <form action="" className="flex flex-col gap-8" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              {" "}
              <Label htmlFor="displayName">Display Name</Label>
              <Input
                id="displayName"
                name="displayName"
                placeholder="Display Name"
                required
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="tags">Tags</Label>
              <Input
                id="tags"
                name="tags"
                placeholder="A comma separated list of tags"
                required
                value={tags}
                onChange={(e) => setTags(e.target.value)}
              />
            </div>

            <IKUpload
              fileName={`${displayName}-${Date.now()}`}
              onError={(error: any) => {
                console.log("error", error);
                setIsLoading(false);
              }}
              tags={[...tags.split(","), displayName]}
              customMetadata={{
                displayName,
              }}
              onSuccess={(success: any) => {
                setIsLoading(false);
                router.push(`/customize/${success.fileId}`);
              }}
              accept="image/*"
              style={{ display: "none" }}
              ref={uploadInputRef}
            />
          </div>
          <DialogFooter className="flex justify-between gap-3">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
            <Button
              disabled={isLoading}
              type="submit"
              className="flex items-center gap-2"
              asChild
            >
              {isLoading ? <Spinner /> : <span>Select Image and Upload</span>}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

function Spinner() {
  return (
    <svg
      className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
}
