"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const content = [
  {
    title: "Collaborative Meme Creation",
    description:
      "Bring your friends into the meme-making process! Memeverse allows you to create memes collaboratively, adding overlays, text, and more in real time. Share the laughs and ideas instantly as you create together, making meme creation a fun and social experience.",
    content: (
      <div className="h-full text-xl w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Meme Creation
      </div>
    ),
  },
  {
    title: "Real-time Editing",
    description:
      "Track every change live as you customize your memes with overlays, text, and effects. Memeverse ensures that all edits are applied instantly, allowing you to see exactly how your meme evolves. No need for tedious manual updates — what you see is what you get!",
    content: (
      <div className="h-full text-xl w-full flex items-center justify-center text-white">
        Real time Editing
      </div>
    ),
  },
  {
    title: "Effortless Version Control",
    description:
      "Worried about losing track of your meme changes? Memeverse keeps every version of your meme safe, so you can easily revert back or experiment freely. Enjoy the freedom to create without worrying about saving multiple versions manually.",
    content: (
      <div className="h-full text-xl w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Effortless Version Control
      </div>
    ),
  },
  {
    title: "Unlimited Creativity",
    description:
      "Let your creativity run wild! Memeverse gives you unlimited access to meme templates, overlays, and editing tools. Keep creating as many memes as you want, with all the features you need to make your memes stand out.",
    content: (
      <div className="h-full text-xl w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Unlimited Creativity
      </div>
    ),
  },
];

export function StickyScrollReveal() {
  return (
    <div className="w-full py-16">
      <div className="mx-auto  mb-4">
        <h2 className="text-5xl text-center font-semibold tracking-tight sm:text-6xl">
          Features
        </h2>
        <p className="mt-2 text-lg text-center text-muted-foreground">
          Explore and customize your favorite memes with your friends
        </p>
      </div>
      <StickyScroll content={content} />
    </div>
  );
}
