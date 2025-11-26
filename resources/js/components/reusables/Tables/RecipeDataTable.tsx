// RecipeDataTable.tsx

import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Star, Utensils } from 'lucide-react';

// --- Typdefinitionen ---

interface Ingredient {
  id: string;
  name: string;
  quantity: string;
  unit: string;
}

interface Category {
  id: number;
  name: string;
  slug: string;
}

interface User {
  id: number;
  name: string;
  avatar: string | null;
}

interface RecipeData {
  id: string;
  name: string;
  status: string;
  slug: string;
  punchline: string | null;
  description: string | null;
  difficulty: string;
  is_veggy: boolean;
  preparation_time: number;
  preparation_instructions: string | null;
  community_rating: number;
  community_votes: number;
  created_at: string;
  updated_at: string;
  ingredients: Ingredient[];
  media: any[];
  category: Category;
  user: User;
  user_id: number;
  is_favorite: boolean;
  user_vote: number | null;
}

/**
 * Der Haupt-Datentyp, der die Paginierungsinformation und das verschachtelte Daten-Array enthält.
 */
export interface PagedData {
  current_page: number;
  data: { data: RecipeData }[]; // Wichtig: Das Array enthält Objekte, die jeweils ein 'data'-Feld haben.
}


// --- Hilfsfunktionen und Konstanten ---

/**
 * Gibt ein ShadCN/UI Badge basierend auf dem Schwierigkeitsgrad zurück.
 */
const getDifficultyBadge = (difficulty: string) => {
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
  data: PagedData;
}

/**
 * Eine ShadCN/UI-basierte Tabelle zur Anzeige von Rezeptdaten.
 */
export const RecipeDataTable: React.FC<RecipeDataTableProps> = ({ data }) => {
  if (!data || !data.data || data.data.length === 0) {
    return (
        <Card>
            <CardContent className="p-4 text-center text-muted-foreground">
                <p>Keine Daten zum Anzeigen vorhanden.</p>
            </CardContent>
        </Card>
    );
  }

  // Das Mapping/Iteration findet hier statt: Wir extrahieren das verschachtelte 'data'-Feld.
  const recipes: RecipeData[] = data.data.map(item => item.data);
  const currentPage = data.current_page;


  return (
    <Card className="w-full max-w-6xl mx-auto shadow-lg">
      <CardHeader className="p-4 border-b">
        <CardTitle className="flex items-center space-x-2 text-xl">
          <Utensils className="h-5 w-5 text-primary" />
          <span>Gerichte/Drinks Übersicht (Seite {currentPage})</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
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
                    {recipe.category.name}
                  </Badge>
                </TableCell>
                <TableCell>
                  {getDifficultyBadge(recipe.difficulty)}
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
      </CardContent>
    </Card>
  );
};