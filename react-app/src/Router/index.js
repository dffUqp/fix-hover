import About from "../Pages/About";
import Error from "../Pages/Error";
import Login from "../Pages/Login";
import PostPage from "../Pages/PostPage";
import Posts from "../Pages/Posts";

export const privateRoutes = [
  { path: "/post", element: Posts },
  { path: "/post/:id", element: PostPage },
  { path: "/about", element: About },
];

export const publicRoutes = [{ path: "/login", element: Login }];
