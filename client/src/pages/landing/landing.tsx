import { MCForm, MCPosts } from '../../components';

export default function LandingPage() {
  return (
    <div className="w-full h-full flex  p-8 justify-around">
      <MCForm />
      <MCPosts />
    </div>
  );
}
