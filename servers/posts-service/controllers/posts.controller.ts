import { Request, Response } from 'express';
import { asyncHandler } from '../utils';
import { GetPosts } from '../repositories/posts.repositories';

export const hadelGetPostsControll = asyncHandler(async (req: Request, res: Response) => {
  const result = await GetPosts();

  res.status(200).send(result);
});
