import React from 'react';
import { GetStaticProps } from 'next';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import type { PostProps } from '@/interfaces'; 


interface ApiPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}

interface PostsPageProps {
    posts: PostProps[];
}

const Posts: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto p-8">
        <h1 className="text-5xl font-extrabold text-indigo-700 text-center mb-6">
          API Fetched Posts ({posts.length})
        </h1>
        <p className="text-xl text-gray-600 text-center mb-10">
          Data fetched using Next.js data fetching methods and displayed via the reusable PostCard component.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {posts.map((post) => (
            <PostCard 
              key={post.id} 
              userId={post.userId}
              id={post.id}
              title={post.title}
              content={post.content}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<PostsPageProps> = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=12');
    if (!response.ok) {
        throw new Error(`Failed to fetch posts: ${response.statusText}`);
    }
    const apiPosts: ApiPost[] = await response.json();
    const posts: PostProps[] = apiPosts.map(post => ({
        userId: post.userId,
        id: post.id,
        title: post.title,
        content: post.body, 
    }));
    
    return {
      props: {
        posts,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error("Error fetching posts:", error);
    return {
      props: {
        posts: [], // Return an empty array on error
      },
    };
  }
};

export default Posts;
