import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Heart } from "lucide-react";
import { HeartFilledIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { favoriteMemeAction } from "../customize/[fileId]/actions";

export const FavoriteButton = ({
  isFavorited,
  fileId,
  filePath,
  pathToRevalidate,
}: {
  isFavorited: boolean;
  fileId: string;
  filePath: string;
  pathToRevalidate: string;
}) => {
  const [isFavoritedState, setIsFavoritedState] = useState(isFavorited);

  const handleFavoriteToggle = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    setIsFavoritedState((prev) => !prev);
    await favoriteMemeAction(fileId, filePath, pathToRevalidate);
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            onClick={handleFavoriteToggle}
            variant={"outline"}
            size={"icon"}
          >
            {isFavoritedState ? (
              <HeartFilledIcon className="size-8" />
            ) : (
              <Heart className="size-8" />
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{isFavoritedState ? "Unfavorite" : "Favorite"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
