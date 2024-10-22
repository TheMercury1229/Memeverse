import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="text-center border-t border-black dark:border-gray-400 py-8 px-4 text-lg text-primary flex flex-col md:flex-row items-center md:justify-between">
      <p className="text-sm text-gray-700">Copyright &copy; 2024 Memeverse</p>
      <p>
        Made with ❤️ by{" "}
        <Link
          href={"https://github.com/TheMercury1229"}
          className="hover:underline hover:translate-y-6  hover:scale-105"
        >
          Mercury
        </Link>
      </p>
    </footer>
  );
};
