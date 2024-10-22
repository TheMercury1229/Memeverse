"use client";
import { Button } from "@/components/ui/button";
import { GridBackground } from "@/components/ui/GridBackground";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
export const Hero = () => {
  return (
    <GridBackground>
      <div className="flex flex-col gap-6 h-full items-center justify-center">
        <h1 className="text-7xl text-center sm:text-8xl font-bold leading-none">
          Welcome to{" "}
          <span className="bg-gradient-to-r bg-clip-text text-transparent from-red-700 to-blue-700">
            Memeverse
          </span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto text-center">
          Explore and customize your favorite memes with your friends
        </p>
        <div>
          <Button className="rounded-full px-10 py-7 text-xl" asChild>
            <Link href="/search?q=" className="flex items-center">
              <span className="font-semibold">Get Started</span>
              <ArrowRight size={30} />
            </Link>
          </Button>
        </div>
      </div>
    </GridBackground>
  );
};
