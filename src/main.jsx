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
import Layout from "./Layout.jsx";
import Home from "./components/Home/home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import User from "./components/User/User.jsx";
import Github, { githubLoader } from "./Github/Github.jsx";

// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"/about",
//         element:<About/>
//       },
//       {
//         path:"/contact",
//         element:<Contact/>
//       }

//     ]
//   }
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" >
        <Route path="" element={<About />} />
        <Route path="youbraj" element={<Contact />} />
      </Route>
      <Route path="contact" element={<Contact />} />
      <Route path="user/:id" element={<User />} />
      <Route loader={githubLoader} path="github" element={<Github />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);