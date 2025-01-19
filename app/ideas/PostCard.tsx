'use client';

import React, { useState, useCallback } from 'react';

interface Post {
  id: number;
  title: string;
  published_at: string;
  medium_image?: string;
}

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  const cardRef = useCallback((node: HTMLDivElement | null) => {
    if (node) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); 
          }
        },
        { threshold: 0.5 } 
      );
      observer.observe(node);
    }
  }, []);

  return (
    <div ref={cardRef} className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative aspect-video">
        {isVisible && (
          <img
            src={post.medium_image || 'https://via.placeholder.com/300'}
            alt={post.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        )}
      </div>
      <div className="p-4">
        <p className="text-gray-500 text-sm mb-2">
          {new Date(post.published_at).toLocaleDateString()}
        </p>
        <h3 className="text-black font-semibold line-clamp-3 hover:text-orange-500 transition-all duration-300">{post.title}</h3>
      </div>
    </div>
  );
};

export default PostCard;
