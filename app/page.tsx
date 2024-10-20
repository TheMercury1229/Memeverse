"use client";
import { Button } from "@/components/ui/button";
import { IKImage, IKUpload, ImageKitProvider } from "imagekitio-next";
import { useState } from "react";
export default function page() {
 
  const [filePath, setFilePath] = useState<string>("");
  return (
    <div>
     
        {filePath && (
        <IKImage
          path={filePath}
          width={300}
          height={300}
          transformation={[{ raw: "l-text,i-hardik,fs-100,co-orange,l-end" }]}
          alt="Hardik"
        />)}
        <div>
          <h2>File upload</h2>
          <IKUpload
            fileName="test-upload.png"
            onError={(error: any) => {
              console.log("error", error);
            }}
            onSuccess={(success: any) => {
              console.log("success", success);
              setFilePath(success.filePath);
            }}
          />
          <Button variant="destructive" onClick={() => setFilePath("")}>
            Clear
          </Button>
        </div>
    </div>
  );
}
