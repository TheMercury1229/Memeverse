"use server";
import { auth } from "@/auth";

export async function currentUser() {
  const session = await auth();
  if (!session) {
    throw new Error("Unauthorized");
  }
  const user = session.user?.id;
  if (!user) {
    throw new Error("Unauthorized");
  }
  return user;
}
