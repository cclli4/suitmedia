'use client';

import React, { useState, useEffect } from 'react';
import Header from './Header';
import Banner from './Banner';
import PostCard from './PostCard';

interface Post {
  id: number;
  title: string;
  date: string;
  image: string;
  published_at: string;
}

const Page = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [sort, setSort] = useState('-published_at');

  const postsData: Post[] = [
    {
      id: 1,
      title: "Terbaru Kenali Tingkatan Influencers berdasarkan Jumlah Followers",
      date: "2024-10-01",
      image: "./banner2.jpg",
      published_at: "2024-10-011T00:00:00Z", 
    },
    {
      id: 2,
      title: "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi",
      date: "2024-10-01",
      image: "./banner3.png",
      published_at: "2024-10-01T00:00:00Z",
    },
    {
      id: 1,
      title: "Terbaru Kenali Tingkatan Influencers berdasarkan Jumlah Followers",
      date: "2024-10-01",
      image: "./banner2.jpg",
      published_at: "2024-10-011T00:00:00Z", 
    },
    {
      id: 2,
      title: "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi",
      date: "2024-10-01",
      image: "./banner3.png",
      published_at: "2024-10-01T00:00:00Z",
    },
    {
      id: 1,
      title: "Terbaru Kenali Tingkatan Influencers berdasarkan Jumlah Followers",
      date: "2024-10-01",
      image: "./banner2.jpg",
      published_at: "2024-10-011T00:00:00Z", 
    },
    {
      id: 2,
      title: "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi",
      date: "2024-10-01",
      image: "./banner3.png",
      published_at: "2024-10-01T00:00:00Z",
    },
    {
      id: 1,
      title: "Terbaru Kenali Tingkatan Influencers berdasarkan Jumlah Followers",
      date: "2024-10-01",
      image: "./banner2.jpg",
      published_at: "2024-10-011T00:00:00Z", 
    },
    {
      id: 2,
      title: "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi",
      date: "2024-10-01",
      image: "./banner3.png",
      published_at: "2024-10-01T00:00:00Z",
    },
    {
      id: 1,
      title: "Terbaru Kenali Tingkatan Influencers berdasarkan Jumlah Followers",
      date: "2024-10-01",
      image: "./banner2.jpg",
      published_at: "2024-10-011T00:00:00Z", 
    },
    {
      id: 2,
      title: "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi",
      date: "2024-10-01",
      image: "./banner3.png",
      published_at: "2024-10-01T00:00:00Z",
    },
    {
      id: 1,
      title: "Terbaru Kenali Tingkatan Influencers berdasarkan Jumlah Followers",
      date: "2024-10-01",
      image: "./banner2.jpg",
      published_at: "2024-10-011T00:00:00Z", 
    },
    {
      id: 2,
      title: "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi",
      date: "2024-10-01",
      image: "./banner3.png",
      published_at: "2024-10-01T00:00:00Z",
    },
    {
      id: 1,
      title: "Terbaru Kenali Tingkatan Influencers berdasarkan Jumlah Followers",
      date: "2024-10-01",
      image: "./banner2.jpg",
      published_at: "2024-10-011T00:00:00Z", 
    },
    {
      id: 2,
      title: "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi",
      date: "2024-10-01",
      image: "./banner3.png",
      published_at: "2024-10-01T00:00:00Z",
    },
    {
      id: 1,
      title: "Terbaru Kenali Tingkatan Influencers berdasarkan Jumlah Followers",
      date: "2024-10-01",
      image: "./banner2.jpg",
      published_at: "2024-10-011T00:00:00Z", 
    },
    {
      id: 2,
      title: "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi",
      date: "2024-10-01",
      image: "./banner3.png",
      published_at: "2024-10-01T00:00:00Z",
    },
    {
      id: 1,
      title: "Terbaru Kenali Tingkatan Influencers berdasarkan Jumlah Followers",
      date: "2024-10-01",
      image: "./banner2.jpg",
      published_at: "2024-10-011T00:00:00Z", 
    },
    {
      id: 2,
      title: "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi",
      date: "2024-10-01",
      image: "./banner3.png",
      published_at: "2024-10-01T00:00:00Z",
    },
    {
      id: 1,
      title: "Terbaru Kenali Tingkatan Influencers berdasarkan Jumlah Followers",
      date: "2024-10-01",
      image: "./banner2.jpg",
      published_at: "2024-10-011T00:00:00Z", 
    },
    {
      id: 2,
      title: "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi",
      date: "2024-10-01",
      image: "./banner3.png",
      published_at: "2024-10-01T00:00:00Z",
    },
    {
      id: 1,
      title: "Terbaru Kenali Tingkatan Influencers berdasarkan Jumlah Followers",
      date: "2024-10-01",
      image: "./banner2.jpg",
      published_at: "2024-10-011T00:00:00Z", 
    },
    {
      id: 2,
      title: "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi",
      date: "2024-10-01",
      image: "./banner3.png",
      published_at: "2024-10-01T00:00:00Z",
    },
    {
      id: 1,
      title: "Terbaru Kenali Tingkatan Influencers berdasarkan Jumlah Followers",
      date: "2024-10-01",
      image: "./banner2.jpg",
      published_at: "2024-10-011T00:00:00Z", 
    },
    {
      id: 2,
      title: "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi",
      date: "2024-10-01",
      image: "./banner3.png",
      published_at: "2024-10-01T00:00:00Z",
    },
    {
      id: 1,
      title: "Terbaru Kenali Tingkatan Influencers berdasarkan Jumlah Followers",
      date: "2024-10-01",
      image: "./banner2.jpg",
      published_at: "2024-10-011T00:00:00Z", 
    },
    {
      id: 2,
      title: "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi",
      date: "2024-10-01",
      image: "./banner3.png",
      published_at: "2024-10-01T00:00:00Z",
    },
    {
      id: 1,
      title: "Terbaru Kenali Tingkatan Influencers berdasarkan Jumlah Followers",
      date: "2024-10-01",
      image: "./banner2.jpg",
      published_at: "2024-10-011T00:00:00Z", 
    },
    {
      id: 2,
      title: "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi",
      date: "2024-10-01",
      image: "./banner3.png",
      published_at: "2024-10-01T00:00:00Z",
    },
    {
      id: 1,
      title: "Terbaru Kenali Tingkatan Influencers berdasarkan Jumlah Followers",
      date: "2024-10-01",
      image: "./banner2.jpg",
      published_at: "2024-10-011T00:00:00Z", 
    },
    {
      id: 2,
      title: "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi",
      date: "2024-10-01",
      image: "./banner3.png",
      published_at: "2024-10-01T00:00:00Z",
    },
  ];

  useEffect(() => {
    const fetchPosts = () => {
      setLoading(true);
      const sortedPosts = sortPosts(postsData, sort);
      const startIndex = (page - 1) * perPage;
      const paginatedPosts = sortedPosts.slice(startIndex, startIndex + perPage);

      setPosts(paginatedPosts);
      setTotalPages(Math.ceil(postsData.length / perPage));
      setLoading(false);
    };

    fetchPosts();
  }, [page, perPage, sort]);

  const sortPosts = (posts: Post[], sortBy: string): Post[] => {
    return posts.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortBy === '-published_at' ? dateB - dateA : dateA - dateB;
    });
  };

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePerPageChange = (newPerPage: string) => {
    setPerPage(parseInt(newPerPage, 10));
    setPage(1); 
  };

  const handleSortChange = (newSort: string) => {
    setSort(newSort);
    setPage(1);
  };

  return (
    <div>
      <Header />
      <Banner />

      <main className="container mx-auto px-4 py-8">
        {/* Kontrol Filter */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-black">
            Showing {posts.length > 0 ? (page - 1) * perPage + 1 : 0} -{' '}
            {Math.min(page * perPage, postsData.length)} of {postsData.length}
          </p>

          <div className="flex space-x-4 items-center">
            <div className="flex items-center space-x-2">
              <label htmlFor="perPage" className="text-black text-sm font-medium">
                Show per page:
              </label>
              <select
                id="perPage"
                value={perPage}
                onChange={(e) => handlePerPageChange(e.target.value)}
                className="border border-gray-300 rounded-full px-4 py-2 text-black text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                {[10, 20, 30].map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <label htmlFor="sort" className="text-black text-sm font-medium">
                Sort by:
              </label>
              <select
                id="sort"
                value={sort}
                onChange={(e) => handleSortChange(e.target.value)}
                className="border border-gray-300 rounded-full px-4 py-2 text-black text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="-published_at">Newest</option>
                <option value="published_at">Oldest</option>
              </select>
            </div>
          </div>
        </div>

        {/* Konten */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(perPage)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 aspect-video rounded-lg mb-4" />
                <div className="h-4 bg-gray-200 rounded w-1/4 mb-2" />
                <div className="h-4 bg-gray-200 rounded w-3/4" />
              </div>
            ))}
          </div>
        ) : posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <PostCard key={index} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-center text-black">No posts available.</p>
        )}

        {/* Pagination */}
        <div className="flex justify-center mt-8 space-x-2">
          <button
            onClick={() => handlePageChange(1)}
            disabled={page === 1}
            className={`px-3 py-1 rounded-full ${
              page === 1 ? 'text-gray-400' : 'text-black hover:bg-gray-200'
            }`}
          >
            &laquo;
          </button>
          <button
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
            className={`px-3 py-1 rounded-full ${
              page === 1 ? 'text-gray-400' : 'text-black hover:bg-gray-200'
            }`}
          >
            &lsaquo;
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`px-4 py-2 rounded-full ${
                page === i + 1
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-200 text-black hover:bg-gray-300'
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(page + 1)}
            disabled={page === totalPages}
            className={`px-3 py-1 rounded-full ${
              page === totalPages ? 'text-gray-400' : 'text-black hover:bg-gray-200'
            }`}
          >
            &rsaquo;
          </button>
          <button
            onClick={() => handlePageChange(totalPages)}
            disabled={page === totalPages}
            className={`px-3 py-1 rounded-full ${
              page === totalPages ? 'text-gray-400' : 'text-black hover:bg-gray-200'
            }`}
          >
            &raquo;
          </button>
        </div>
      </main>
    </div>
  );
};

export default Page;
