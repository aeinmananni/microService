import { mySqlMicroServicePool } from '../config/database';
import { PostsType } from '../models';

export const GetPosts = async () => {
  return await 'Posts';
};

export const AddPosts = async (value: string) => {
  const result = await mySqlMicroServicePool<PostsType>(`EXECUTE MICRO.AddPosts N'${value}'`);

  return result;
};
