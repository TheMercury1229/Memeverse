import React from "react";
import { Vortex } from "@/components/ui/vortex";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <div className="max-full mx-auto rounded-md mb-4  h-[100vh] py-8 overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Join Memeverse now!!
        </h2>
        <p className="text-muted-foreground text-sm md:text-2xl max-w-xl mt-6 text-center">
          Start creating memes with your friends and unleash your creativity!
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <Button className="rounded-full px-10 py-7 text-xl" asChild>
            <Link href="/search?q=0" className="flex items-center">
              <span className="font-semibold">Get Started</span>
              <ArrowRight size={30} />
            </Link>
          </Button>
        </div>
      </Vortex>
    </div>
  );
}
