import { Button } from "@/components/ui/button";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { router } from "@inertiajs/react";

interface FavoriteButtonProps {
  recipeId?: string;        // optional, falls Backend-Toggle aktiv ist
  isFavorite?: boolean;     // initialer Zustand
  className?: string;
}

export default function FavoriteButton({
  recipeId,
  isFavorite = false,
  className,
}: FavoriteButtonProps) {
  const [active, setActive] = useState<boolean>(isFavorite);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    // 👇 verhindert Navigation oder bubbling in Link/Card
    e.preventDefault();
    e.stopPropagation();

    // Doppelklick verhindern, solange loading
    if (loading) return;

    const next = !active;
    setActive(next);

    if (!recipeId) {
      alert(next ? "Zu Favoriten hinzugefügt" : "Aus Favoriten entfernt");
      return;
    }

    try {
      setLoading(true);
      await router.post(
        route("favorites.toggle", recipeId),
        { favorite: next },
        {
          preserveScroll: true,
          preserveState: true,
        }
      );
    } catch (error) {
      console.error("Favorite toggle failed:", error);
      setActive(!next); // revert bei Fehler
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={handleClick}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      disabled={loading}
      variant="flat"
      className={cn(
        "shadow-none text-gray-400 rounded-full transition-colors",
        "hover:text-primary hover:fill-primary",
        active && "text-primary fill-primary", // Favorit aktiv → grün
        "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      title={active ? "Favorit entfernen" : "Zu Favoriten hinzufügen"}
      type="button" // 👈 wichtig, sonst submit in Formularen
    >
      {isHovered || active ? <FaHeart /> : <FaRegHeart />}
    </Button>
  );
}
