import { Request, Response } from 'express';
import { asyncHandler } from '../utils';
import { AddPosts, GetPosts } from '../repositories/posts.repositories';

export const hadelGetPostsControll = asyncHandler(async (req: Request, res: Response) => {
  const result = await GetPosts();
  res.status(200).send(result);
});

export const handelAddPosts = asyncHandler(async (req: Request, res: Response) => {
  const { title } = req.body;
  const result = await AddPosts(title);
  res.status(200).send(result);
});
