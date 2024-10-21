import { unstable_noStore } from "next/cache";
import { ResultList } from "../_components/ResultList";
import { UploadMemeButton } from "../_components/UploadMemeButton";
import { imagekit } from "../lib/imageKit";
import { getFavoriteCounts } from "./loaders";

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
      <ResultList results={results} counts={favoritesCount} />
    </div>
  );
}
