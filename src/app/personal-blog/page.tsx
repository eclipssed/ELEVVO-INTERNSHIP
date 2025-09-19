"use client";

import Image from "next/image";
import { useState } from "react";

type Post = {
  id: number;
  title: string;
  image: string;
  description: string;
  date: string;
  category: "Tech" | "Travel" | "Food";
};

const postsData: Post[] = [
  {
    id: 1,
    title: "Building with React",
    image: "/react.jpg",
    description: "Learn how to build scalable apps with React.",
    date: "2025-09-10",
    category: "Tech",
  },
  {
    id: 2,
    title: "Exploring Japan",
    image: "/japan.jpg",
    description: "A journey through Tokyo and Kyoto.",
    date: "2025-08-20",
    category: "Travel",
  },
  {
    id: 3,
    title: "10 Best Pasta Recipes",
    image: "/pasta-recipe.webp",
    description: "Quick and delicious recipes for pasta lovers.",
    date: "2025-08-15",
    category: "Food",
  },
  {
    id: 4,
    title: "Next.js Performance Tips",
    image: "/nextjs.png",
    description: "Make your Next.js apps blazing fast.",
    date: "2025-07-12",
    category: "Tech",
  },
  {
    id: 5,
    title: "Backpacking Europe",
    image: "/backpacking-europe.jpeg",
    description: "Tips and tricks for affordable travel.",
    date: "2025-07-01",
    category: "Travel",
  },
];

const PersonalBlogHomepage = () => {
  const [category, setCategory] = useState<string>("All");
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  const POSTS_PER_PAGE = 3;

  const filteredPosts = postsData.filter((post) => {
    const matchesCategory = category === "All" || post.category === category;
    const matchesSearch = post.title
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  const paginatedPosts = filteredPosts.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow p-6 text-center">
        <h1 className="text-3xl font-bold">My Personal Blog</h1>
      </header>

      {/* Controls */}
      <div className="max-w-5xl mx-auto p-6 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Category Filter */}
        <div className="flex gap-2">
          {["All", "Tech", "Travel", "Food"].map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-lg ${
                category === cat
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => {
                setCategory(cat);
                setPage(1);
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="Search posts..."
          className="px-4 py-2 border rounded-lg w-full md:w-64"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
        />
      </div>

      {/* Blog Cards */}
      <div className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 p-6">
        {paginatedPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            <Image
              src={post.image}
              alt={post.title}
              height={40}
              width={500}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="font-semibold text-lg">{post.title}</h2>
              <p className="text-sm text-gray-500">{post.date}</p>
              <p className="mt-2 text-gray-600 text-sm">{post.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mb-8">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              className={`px-3 py-1 rounded ${
                page === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => setPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default PersonalBlogHomepage;
