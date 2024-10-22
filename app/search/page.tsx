import { unstable_noStore } from "next/cache";
import { ResultList } from "../_components/ResultList";
import { UploadMemeButton } from "../_components/UploadMemeButton";
import { imagekit } from "../lib/imageKit";
import { getFavoriteCounts } from "./loaders";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: {
    q: string;
  };
}) {
  unstable_noStore();
  const results = await imagekit.listFiles({
    tags: `${searchParams.q}`,
  });
  const favoritesCount = await getFavoriteCounts(results.map((r) => r.fileId));

  return (
    <div className="px-4 container mx-auto space-y-8 py-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl lg:text-4xl font-bold">Search Results</h1>
        <UploadMemeButton />
      </div>
      {results.length === 0 && (
        <Card className="py-8 flex flex-col items-center justify-center gap-4">
          <Image
            src="/empty.svg"
            width="200"
            height="200"
            alt="an empty state image"
          />
          <p>No memes found! Try searching anything else</p>
          <Button asChild>
            <Link href="/search?q=">Find some Memes</Link>
          </Button>
        </Card>
      )}
      {results.length > 0 && (
        <ResultList results={results} counts={favoritesCount} />
      )}
    </div>
  );
}
