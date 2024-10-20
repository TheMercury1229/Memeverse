"use client";
import { Input } from "@/components/ui/input";
import { useSearchParams } from "next/navigation";

export const SearchInput = () => {
    const query = useSearchParams();

  return (
    <Input
      type="search"
      name="search"
      defaultValue={query.get("q") || ""}
      placeholder="Search for memes..."
      className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
    />
  );
}
