import { unstable_noStore } from "next/cache";
import { imagekit } from "@/app/lib/imageKit";
import { CustomizePanel } from "./CustomizePanel";


export default async function CustomizePage({
  params,
}: {
  params: {
    fileId:string
  };
}) {
  unstable_noStore();
  const results = await imagekit.getFileDetails(params.fileId);
  return (
    <div className="px-4 container mx-auto space-y-8 py-8">
        <CustomizePanel file={{filePath:results.filePath,name:results.name,fileId:params.fileId}} />
    </div>
  );
}
