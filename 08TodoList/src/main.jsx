import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { 
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
 } from "react-router-dom";
import LayOut from "./LayOut.jsx";
import Home from "./Component/Home/Home.jsx";
import TodoList from "./Component/TodoList/TodoList.jsx";
import Contact from "./Component/Contact/Contact.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LayOut />}>
      <Route path="" element={<Home />} />
      <Route path="todolist" element={<TodoList />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
