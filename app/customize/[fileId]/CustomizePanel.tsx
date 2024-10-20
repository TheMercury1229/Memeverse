"use client";
import { FileObject } from "imagekit/dist/libs/interfaces";
import { IKImage } from "imagekitio-next";
import { useState } from "react";
import { TextOverlay } from "./TextOverlay";
import { Button } from "@/components/ui/button";

export const CustomizePanel = ({
  results,
}: {
  results: Pick<FileObject, "filePath" | "name">;
}) => {
  const [transformation, setTransformation] = useState<
    Record<string, { raw: string }>
  >({});

  const transformationArray = Object.values(transformation).map((t) => ({
    raw: t.raw,
  }));
  const [noOfOverlays, setNoOfOverlays] = useState(1);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex flex-col gap-8">
        {new Array(noOfOverlays).fill(0).map((_, index) => (
          <TextOverlay
            key={index}
            index={index}
            file={results}
            onUpdate={({ text, x, y, fontSize }) => {
              setTransformation((current) => ({
                ...current,
                text1: {
                  raw: `l-text,i-${text ? text : " "},lx-bw_mul_${x.toFixed(
                    2
                  )},ly-bw_mul_${y.toFixed(2)},fs-${
                    fontSize ? fontSize : 10
                  },l-end`,
                },
              }));
            }}
          />
        ))}
        <div className="flex flex-col md:flex-row gap-4">
          <Button
            className="w-full md:w-auto"
            onClick={() => setNoOfOverlays(noOfOverlays + 1)}
          >
          Add Overlay
        </Button>
          <Button
            className="w-full md:w-auto"
            variant={"destructive"}
            disabled={noOfOverlays === 1}
            onClick={() => {setNoOfOverlays(noOfOverlays - 1)
                const lastIndex=noOfOverlays-1;
                setTransformation((current)=>{
                    const {
                        [`text${lastIndex}`]:undefined,...rest
                    }=current;
                    return rest;
                })

            }}
          >
            Remove Last Overlay
          </Button>
        </div>
      </div>
      <div className="flex justify-center items-center">

      <IKImage
        path={results.filePath}
        alt={results.name}
        urlEndpoint={process.env.NEXT_PUBLIC_URL_ENDPOINT!}
        key={results.name}
        transformation={transformationArray}
      />
      </div>
    </div>
  );
};
