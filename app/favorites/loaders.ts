import { eq } from "drizzle-orm";
import { db } from "../db/db";
import { currentUser } from "../lib/auth-utils";
import { favorites } from "../db/schema";

export async function getUserFavorites() {
  const userId = await currentUser();
  const allFavorite = await db.query.favorites.findMany({
    where: eq(favorites.userId, userId),
  });

  return allFavorite;
}
