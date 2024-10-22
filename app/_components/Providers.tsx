"use client";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ImageKitProvider } from "imagekitio-next";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
  const authenticator = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXTAUTH_URL}/api/auth` ||
          "http://localhost:3000/api/auth"
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Request failed with status ${response.status}: ${errorText}`
        );
      }

      const data = await response.json();
      const { signature, expire, token } = data;
      return { signature, expire, token };
    } catch (error: any) {
      throw new Error(`Authentication request failed: ${error.message}`);
    }
  };

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ImageKitProvider
        urlEndpoint={process.env.NEXT_PUBLIC_URL_ENDPOINT!}
        publicKey={publicKey}
        authenticator={authenticator}
      >
        {children}
      </ImageKitProvider>
    </ThemeProvider>
  );
};
