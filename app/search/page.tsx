import ImageKit from "imagekit";
import { unstable_noStore } from "next/cache";
import { ResultList } from "../_components/ResultList";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { UploadMemeButton } from "../_components/UploadMemeButton";


const imagekit = new ImageKit({
  publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY!,
  privateKey: process.env.PRIVATE_KEY!,
  urlEndpoint: process.env.NEXT_PUBLIC_URL_ENDPOINT!,
});
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
  return (
    <div className="px-4 container mx-auto space-y-8 py-8">
        <div className="flex items-center justify-between">

            <h1 className="text-2xl lg:text-4xl font-bold">Search Results</h1>
            <UploadMemeButton />
        </div>

      <ResultList results={results} />
    </div>
  );
}
