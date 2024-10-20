"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { FileObject } from "imagekit/dist/libs/interfaces";
import { Card } from "@/components/ui/card";

export const TextOverlay = ({
  file,
  onUpdate,
  index,
}: {
  index: number;
  file: Pick<FileObject, "filePath" | "name">;
  onUpdate: ({
    text,
    x,
    y,
    fontSize,
  }: {
    text: string;
    x: number;
    y: number;
    fontSize: number;
  }) => void;
}) => {
  const [textOverlay, setTextOverlay] = useState<string>("");
  const [textOverlayXPosition, setTextOverlayXPosition] = useState<number>(50);
  const [textOverlayYPosition, setTextOverlayYPosition] = useState<number>(50);
  const [fontSize, setFontSize] = useState<number>(50);

  const xPositionDecimal = textOverlayXPosition / 100;
  const yPositionDecimal = textOverlayYPosition / 100;

  return (
    <Card className="p-4 space-y-4">
      <div className="flex flex-col gap-1 ">
        <Label className="text-base">Text Overlay {index + 1}</Label>
        <Input
          type="text"
          placeholder={`Text Overlay ${index + 1}`}
          value={textOverlay}
          onChange={(e) => {
            setTextOverlay(e.target.value);
            onUpdate({
              text: e.target.value,
              x: xPositionDecimal,
              y: yPositionDecimal,
              fontSize,
            });
          }}
        />
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 ">
        <div className="flex-1 flex flex-col gap-1">
          <Label className="text-base">Text Overlay X Position</Label>
          <Slider
            id={`textOverlayXPosition${index + 1}`}
            value={[textOverlayXPosition]}
            onValueChange={(value) => {
              setTextOverlayXPosition(value[0]);
              onUpdate({
                text: textOverlay,
                x: value[0] / 100,
                y: yPositionDecimal,
                fontSize,
              });
            }}
          />
        </div>
        <div className="flex-1 flex flex-col gap-1">
          <Label className="text-base">Text Overlay Y Position</Label>
          <Slider
            id={`textOverlayYPosition${index + 1}`}
            value={[textOverlayYPosition]}
            onValueChange={(value) => {
              setTextOverlayYPosition(value[0]);
              onUpdate({
                text: textOverlay,
                x: xPositionDecimal,
                y: value[0] / 100,
                fontSize,
              });
            }}
          />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <Label className="text-base">Font Size</Label>
        <Input
          type="number"
          placeholder="Font Size"
          value={fontSize}
          onChange={(e) => {
            setFontSize(parseInt(e.target.value));
            onUpdate({
              text: textOverlay,
              x: xPositionDecimal,
              y: yPositionDecimal,
              fontSize: parseInt(e.target.value),
            });
          }}
        />
      </div>
    </Card>
  );
};
