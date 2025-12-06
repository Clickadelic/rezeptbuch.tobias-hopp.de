import axios from 'axios';
import { Recipe } from '@/types/Recipe';
import Paginated from '@/types/Paginated';

interface FetchRecipesParams {
  search?: string;
  page?: number;
}

export const fetchRecipes = async ({ search = '', page = 1 }: FetchRecipesParams): Promise<Paginated<Recipe>> => {
    const response = await axios.get(`/rezepte`, { params: { search, page } });
    return response.data;
};
