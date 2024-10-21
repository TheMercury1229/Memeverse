"use server";

import { db } from "@/app/db/db";
import { favorites } from "@/app/db/schema";
import { currentUser } from "@/app/lib/auth-utils";
import { eq, and } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export const favoriteMemeAction = async (fileId: string) => {
  const user = await currentUser();
  const favorite = await db.query.favorites.findFirst({
    where: and(eq(favorites.userId, user), eq(favorites.memeId, fileId)),
  });
  if (favorite) {
    await db
      .delete(favorites)
      .where(and(eq(favorites.userId, user), eq(favorites.memeId, fileId)));
    return;
  } else {
    await db.insert(favorites).values({
      userId: user,
      memeId: fileId,
    });
  }
  revalidatePath(`/customize/${fileId}`);
};
