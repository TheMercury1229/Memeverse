"use client";

import { IKImage } from "imagekitio-next";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { type Favorite } from "../db/schema";
import { FavoriteButton } from "../_components/FavoriteButton";
import { useEffect } from "react";

export function FavoritesList({ favorites }: { favorites: Favorite[] }) {
  useEffect(() => {
    console.log(favorites);
  }, [favorites]);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {favorites.map((favorite) => (
        <Card key={favorite.memeId}>
          <CardContent className="p-3 flex flex-col items-center gap-3">
            <IKImage
              key={favorite.memeId}
              path={favorite.filePath}
              alt={"a meme"}
              width={250}
              height={250}
            />
          </CardContent>
          <CardFooter className="flex justify-between mt-2">
            <Button asChild>
              <Link href={`/customize/${favorite.memeId}`}>Customize</Link>
            </Button>

            <FavoriteButton
              pathToRevalidate={`/favorites`}
              fileId={favorite.memeId}
              filePath={favorite.filePath}
              isFavorited={true}
            />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
