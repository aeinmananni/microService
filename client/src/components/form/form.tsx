import { useState, type ChangeEvent, type FormEvent } from 'react';
import { MCButton, MCInput } from '../custom';
import axios from 'axios';
export default function Form() {
  const [title, setTitle] = useState<string>('');

  const handelSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:4402/api/posts/POST/Add', { title });
      console.log(response.data);
      setTitle('');
    } catch (error) {
      return error;
    }
  };
  return (
    <form
      onSubmit={handelSubmit}
      className="flex flex-col border w-1/3 rounded-lg  shadow-lg p-3 gap-7 items-center h-max"
    >
      <MCInput
        className="border outline-none focus:ring-2 ring-offset-2 rounded-md px-3 py-2"
        label="Create Post"
        value={title}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
      />
      <MCButton
        type="submit"
        className="bg-blue-600 rounded-sm text-white w-1/2 active:scale-95 transition-all duration-500"
      >
        Submit
      </MCButton>
    </form>
  );
}
