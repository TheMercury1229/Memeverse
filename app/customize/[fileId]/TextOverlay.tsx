"use client"
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { TwitterPicker } from "react-color";
import { useEffect, useState } from "react";

export function TextOverlay({
  index,
  onUpdate,
}: {
  index: number;
  onUpdate: (
    index: number,
    text: string,
    fontSize: number,
    x: number,
    y: number,
    bgColor?: string
  ) => void;
}) {
  const [textOverlay, setTextOverlay] = useState("");
  const [textOverlayXPosition, setTextOverlayXPosition] = useState(0);
  const [textOverlayYPosition, setTextOverlayYPosition] = useState(0);
  const [applyTextBackground, setApplyTextBackground] = useState(false);
  const [textBgColor, setTextBgColor] = useState("#FFFFFF");
  const [fontSize, setFontSize] = useState(10);

  const xPositionDecimal = (textOverlayXPosition / 100).toFixed(2);
  const yPositionDecimal = (textOverlayYPosition / 100).toFixed(2);
  const bgColor = applyTextBackground
    ? textBgColor.replace("#", "")
    : undefined;

  useEffect(() => {
    onUpdate(
      index,
      textOverlay || " ",
      fontSize,
      parseFloat(xPositionDecimal),
      parseFloat(yPositionDecimal),
      bgColor
    );
  }, [
    index,
    textOverlay,  
    fontSize,
    parseFloat(xPositionDecimal),
    parseFloat(yPositionDecimal),
    bgColor,
    onUpdate,
  ]);

  return (
    <Card className="p-4 space-y-4">
      <div className="flex justify-between gap-4">
        <div className="flex-grow">
          <Label htmlFor={`textOverlay${index}`}>Text Overlay {index}</Label>
          <Input
            id={`textOverlay${index}`}
            onChange={(e) => {
              setTextOverlay(e.target.value);
            }}
            value={textOverlay}
          />
        </div>
        <div className="flex items-center gap-4">
          <Checkbox
            checked={applyTextBackground}
            onCheckedChange={(v) => {
              setApplyTextBackground(v as boolean);
            }}
            id={`applyBackground${index}`}
          />
          <label
            htmlFor={`applyBackground${index}`}
            className="text-sm font-medium leading-none"
          >
            Apply Text Background
          </label>
        </div>
      </div>
      {applyTextBackground && (
        <TwitterPicker
          color={textBgColor}
          onChange={(value) => {
            setTextBgColor(value.hex);
          }}
        />
      )}

      <div className="space-y-2">
        <Label>Font Size</Label>
        <Slider
          value={[fontSize]}
          min={10}
          max={100}
          step={1}
          onValueChange={([v]) => setFontSize(v)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor={`text${index}XPosition`}>Text {index} X Position</Label>
        <Slider
          id={`text${index}XPosition`}
          value={[textOverlayXPosition]}
          min={0}
          max={100}
          onValueChange={([v]) => setTextOverlayXPosition(v)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor={`text${index}YPosition`}>Text {index} Y Position</Label>
        <Slider
          id={`text${index}YPosition`}
          value={[textOverlayYPosition]}
          min={0}
          max={100}
          onValueChange={([v]) => setTextOverlayYPosition(v)}
        />
      </div>
    </Card>
  );
}
