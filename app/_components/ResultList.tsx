"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HeartFilledIcon } from "@radix-ui/react-icons";

import { FileObject } from "imagekit/dist/libs/interfaces";
import { IKImage } from "imagekitio-next";
import Link from "next/link";

export const ResultList = ({
  results,
  counts,
}: {
  results: FileObject[];
  counts: { memeId: string; count: number }[];
}) => {
  return (
    <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
      {results.map((file: FileObject) => (
        <Card className="mx-auto" key={file.fileId}>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>{file.customMetadata?.displayName || file.name}</span>
              <Button asChild variant="outline" disabled>
                <span className="flex items-center">
                  <HeartFilledIcon className="w-5 h-5" />
                  {counts.find((c) => c.memeId === file.fileId)?.count ?? 0}
                </span>
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <IKImage
              urlEndpoint={process.env.NEXT_PUBLIC_URL_ENDPOINT!}
              path={file.filePath}
              alt={file.name}
              width={250}
              height={250}
            />
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href={`/customize/${file.fileId}`}>Customize</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
