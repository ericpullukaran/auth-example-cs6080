import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./pages/Root";
import reportWebVitals from "./reportWebVitals";
import About from "./pages/About";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import { AuthProvider } from "./utils/AuthProvider";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="posts" element={<Posts />} />
      {/* ... etc. */}
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
