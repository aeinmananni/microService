import { Request, Response } from 'express';
import { asyncHandler } from '../utils';
import { GetComments } from '../repositories/comments.repositories';

export const hadelGetCommentsControll = asyncHandler(async (req: Request, res: Response) => {
  const result = await GetComments();

  res.status(200).send(result);
});
