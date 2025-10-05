import axios from 'axios';
import { useEffect, useState } from 'react';
import type { PostsType } from '../../models';

export default function Posts() {
  const [posts, setPosts] = useState<PostsType[]>([]);
  const handelGertAllPosts = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:4402/api/posts/GET/All');
      setPosts(response.data);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    handelGertAllPosts();
  }, []);
  return (
    <div className="border w-1/4 rounded-lg">
      {posts.map(it => (
        <div className="flex justify-between p-2 border-b-2 border-blue-500 bg-blue-50">
          <h1 className="border-2 border-yellow-500 w-6 h-6 flex justify-center items-center rounded-full">
            {it.id}
          </h1>
          <h1> {it.title}</h1>
        </div>
      ))}
    </div>
  );
}
