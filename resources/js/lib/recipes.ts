import axios from 'axios';
import { Recipe } from '@/types/Recipe';
import Paginated from '@/types/Paginated';

export const fetchRecipes = async (): Promise<Paginated<Recipe>> => {
    const response = await axios.get(`/rezepte`);
    return response.data;
};

// export const addComment = async (
//     recipeId: string,
//     content: string,
//     parentId?: string,
// ): Promise<Comment> => {
//     const response = await axios.post(`/rezepte/${recipeId}/comments`, {
//         content,
//         parent_id: parentId || null,
//     });
//     return response.data;
// };

// export const deleteComment = async (commentId: string): Promise<void> =>
//     await axios.delete(`/comments/${commentId}`);
