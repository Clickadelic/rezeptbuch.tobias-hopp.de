import axios from 'axios';
import { Recipe } from '@/types/Recipe';
import Paginated from '@/types/Paginated';

export const fetchRecipes = async (): Promise<Paginated<Recipe>> => {
    const response = await axios.get(`/rezepte`);
    return response.data;
};
