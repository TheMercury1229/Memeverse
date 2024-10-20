"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { FileObject } from "imagekit/dist/libs/interfaces";
import { IKImage } from "imagekitio-next";
import Link from "next/link";

export const ResultList = ({results}: {results: FileObject[]}) => {
  return (
    <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {results.map((file: FileObject) => (
        <Card className="mx-auto" key={file.fileId}>
          <CardHeader>
            <CardTitle>{file.customMetadata?.displayName || file.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <IKImage
              urlEndpoint={process.env.NEXT_PUBLIC_URL_ENDPOINT!}
              path={file.filePath}
              alt={file.name}
              width={200}
              height={200}
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
}
