import { unstable_noStore } from "next/cache";
import { imagekit } from "@/app/lib/imageKit";
import { CustomizePanel } from "./CustomizePanel";
import { getFavoriteMeme } from "./loaders";

export default async function CustomizePage({
  params,
}: {
  params: {
    fileId: string;
  };
}) {
  unstable_noStore(); //Used to prevent Next.js from revalidating the page
  const results = await imagekit.getFileDetails(params.fileId);
  const isFavorited = await getFavoriteMeme(params.fileId);
  return (
    <div className="px-4 container mx-auto space-y-8 py-8">
      <CustomizePanel
        isFavorited={isFavorited}
        file={{
          filePath: results.filePath,
          name: results.name,
          fileId: params.fileId,
        }}
      />
    </div>
  );
}
