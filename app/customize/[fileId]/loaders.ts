import { db } from "@/app/db/db";
import { favorites } from "@/app/db/schema";
import { currentUser } from "@/app/lib/auth-utils";
import { and, eq } from "drizzle-orm";

export async function getFavoriteMeme(fileId: string) {
  const userId = await currentUser();

  const favorite = await db.query.favorites.findFirst({
    where: and(eq(favorites.userId, userId), eq(favorites.memeId, fileId)),
  });

  return !!favorite;
}
