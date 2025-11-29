// RecipeDataTable.tsx
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import { Clock, Star, Utensils } from 'lucide-react';
import { GoArrowLeft, GoArrowRight, GoPencil, GoPlus } from 'react-icons/go';
import { BsTrash3 } from 'react-icons/bs';
import { Link } from '@inertiajs/react';
import { TbCancel, TbNumber1, TbNumber2, TbNumber3 } from 'react-icons/tb';
import { SlRefresh } from 'react-icons/sl';
import { GiBroccoli } from 'react-icons/gi';
import { BsJournalBookmark } from 'react-icons/bs';
import { TfiEye } from 'react-icons/tfi';
import { GoEyeClosed } from 'react-icons/go';
import Paginated from '@/types/Paginated';

import { Recipe } from '@/types/Recipe';
import { Ingredient } from '@/types/Ingredient';
import { Category } from '@/types/Category';

const getDifficultyBadge = (difficulty: string) => {
  if (!difficulty) return <Badge variant="outline">N/A</Badge>;
  const normalizedDifficulty = difficulty.toLowerCase();
  
  if (normalizedDifficulty === 'einfach') {
    return <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-200">Einfach</Badge>;
  }
  if (normalizedDifficulty === 'mittel') {
    return <Badge variant="secondary" className="bg-yellow-100 text-yellow-700 hover:bg-yellow-200">Mittel</Badge>;
  }
  if (normalizedDifficulty === 'schwer') {
    return <Badge variant="secondary" className="bg-red-100 text-red-700 hover:bg-red-200">Schwer</Badge>;
  }
  return <Badge variant="outline">{difficulty}</Badge>;
};

/**
 * Formatiert die Community-Bewertung.
 */
const formatRating = (rating: number, votes: number) => {
  if (votes === 0) return 'N/A';
  return `${rating.toFixed(1)}/5 (${votes})`;
};


// --- Die Hauptkomponente ---

interface RecipeDataTableProps {
  data: Paginated<Recipe>;
}

/**
 * Eine ShadCN/UI-basierte Tabelle zur Anzeige von Rezeptdaten.
 */
export const RecipeDataTable: React.FC<RecipeDataTableProps> = ({ data }) => {
    if (!data || !data.data || data.data.length === 0) {
      return (
          <div>
            <p>Keine Daten zum Anzeigen vorhanden.</p>
          </div>
              
      );
    }


    const recipes = data.data;
    const currentPage = data.current_page;

    return (
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[140px]">Status</TableHead>
            <TableHead className="w-[220px]">Name & Punchline</TableHead>
            <TableHead>Kategorie</TableHead>
            <TableHead>Schwierigkeit</TableHead>
            <TableHead>Vegetarisch</TableHead>
            <TableHead className="text-right">Vorbereitungszeit</TableHead>
            <TableHead className="text-center">Bewertung</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* Iteration über die gemappten Rezepte */}
          {recipes.map((recipe) => (
            <TableRow key={recipe.id}>
              <TableCell className="font-medium">
                {recipe.status === 'published' ? <span className="flex gap-2"><TfiEye className="size-4 text-primary" /> veröffentlicht</span> : <span className="flex gap-2"><GoEyeClosed className="size-4 text-rose-600" /> Entwurf</span>}
              </TableCell>
              <TableCell className="font-medium">
                <div className="flex flex-col">
                  <span className="text-base">{recipe.name}</span>
                  {recipe.punchline && (
                    <span className="text-xs text-muted-foreground italic">
                      {recipe.punchline}
                    </span>
                  )}
                </div>
              </TableCell>
              <TableCell>
                <Badge variant="outline" className="text-blue-600 border-blue-200">
                  {recipe.category?.name || 'N/A'}
                </Badge>
              </TableCell>
              <TableCell>
                {getDifficultyBadge(recipe.difficulty || 'N/A')}
              </TableCell>
              <TableCell>
                <span className={`font-medium ${recipe.is_veggy ? 'text-green-500' : 'text-gray-500'}`}>
                  {recipe.is_veggy ? '🌱 Ja' : '❌ Nein'}
                </span>
              </TableCell>
              <TableCell className="text-right">
                  <Clock className="inline h-4 w-4 mr-1 text-primary/70" />
                  {recipe.preparation_time} Min.
              </TableCell>
              <TableCell className="text-center">
                  <div className="flex items-center justify-center space-x-1">
                      <Star className={`h-4 w-4 ${recipe.community_votes > 0 ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} />
                      <span className="font-semibold">{formatRating(recipe.community_rating, recipe.community_votes)}</span>
                  </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
};