import { useMemo } from "react";

export const useSortedPost = (posts, sort) => {
  const sortedPost = useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return posts;
  }, [sort, posts]);

  return sortedPost;
};

const usePost = (posts, sort, query) => {
  const sortedPost = useSortedPost(posts, sort);

  const sortedAndSeachedPost = useMemo(
    () =>
      sortedPost.filter((post) =>
        post.title.toLowerCase().includes(query.toLowerCase())
      ),
    [query, sortedPost]
  );

  return sortedAndSeachedPost;
};

export default usePost;
