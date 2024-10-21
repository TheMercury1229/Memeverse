import { unstable_noStore } from "next/cache";
import { imagekit } from "@/app/lib/imageKit";
import { CustomizePanel } from "./CustomizePanel";
import { getFavoriteMeme } from "./loaders";
import { auth } from "@/auth";

export default async function CustomizePage({
  params,
}: {
  params: {
    fileId: string;
  };
}) {
  const session = await auth();
  unstable_noStore(); //Used to prevent Next.js from revalidating the page
  const results = await imagekit.getFileDetails(params.fileId);
  const isFavorited = session ? await getFavoriteMeme(params.fileId) : false;
  return (
    <div className="px-4 container mx-auto space-y-8 py-8">
      <CustomizePanel
        isFavorited={isFavorited}
        isAuthenticated={!!session}
        file={{
          filePath: results.filePath,
          name: results.name,
          fileId: params.fileId,
        }}
      />
    </div>
  );
}
