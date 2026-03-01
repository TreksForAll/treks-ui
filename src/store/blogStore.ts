import { create } from 'zustand';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  author: string;
  authorRole?: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
  views?: number;
  likes?: number;
  tags?: string[];
  featured?: boolean;
  externalLink?: string;
}

interface BlogFilters {
  category?: string;
  author?: string;
  sortBy?: string;
}

interface BlogStore {
  posts: BlogPost[];
  featuredPosts: BlogPost[];
  categories: string[];
  authors: string[];
  filters: BlogFilters;
  isLoading: boolean;
  searchTerm: string;
  savedPosts: string[];
  setPosts: (posts: BlogPost[]) => void;
  setFeaturedPosts: (posts: BlogPost[]) => void;
  setCategories: (categories: string[]) => void;
  setAuthors: (authors: string[]) => void;
  setFilters: (filters: BlogFilters) => void;
  setLoading: (loading: boolean) => void;
  setSearchTerm: (term: string) => void;
  toggleSavedPost: (postId: string) => void;
}

export const useBlogStore = create<BlogStore>((set) => ({
  posts: [],
  featuredPosts: [],
  categories: [],
  authors: [],
  filters: {},
  isLoading: false,
  searchTerm: '',
  savedPosts: [],
  setPosts: (posts) => set({ posts }),
  setFeaturedPosts: (featuredPosts) => set({ featuredPosts }),
  setCategories: (categories) => set({ categories }),
  setAuthors: (authors) => set({ authors }),
  setFilters: (filters) => set({ filters }),
  setLoading: (isLoading) => set({ isLoading }),
  setSearchTerm: (searchTerm) => set({ searchTerm }),
  toggleSavedPost: (postId) =>
    set((state) => ({
      savedPosts: state.savedPosts.includes(postId)
        ? state.savedPosts.filter((id) => id !== postId)
        : [...state.savedPosts, postId],
    })),
}));
