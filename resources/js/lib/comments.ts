import axios from 'axios';
import { Comment } from '@/types/Comment';
import Paginated from '@/types/Paginated';

export const fetchComments = async (recipeId: string, page = 1): Promise<Paginated<Comment>> => {
  const response = await axios.get(`/rezepte/${recipeId}/comments?page=${page}`);
  return response.data;
};


export const addComment = async (recipeId: string, content: string, parentId?: string): Promise<Comment> => {
  const response = await axios.post(`/rezepte/${recipeId}/comments`, {
    content,
    parent_id: parentId || null,
  });
  return response.data;
};

export const deleteComment = async (commentId: string): Promise<void> => await axios.delete(`/comments/${commentId}`);