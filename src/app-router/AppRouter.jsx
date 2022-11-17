import React from "react";
import Navbar from "../components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import DashBoard from "../pages/DashBoard";
import Details from "../pages/Details";
import NewBlog from "../pages/NewBlog";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import UpdateBlog from "../pages/UpdateBlog";
import BlogCard from "../components/BlogCard";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="" element={<DashBoard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details" element={<Details />} />
        <Route path="/newBlog" element={<NewBlog />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/updateBlog" element={<UpdateBlog />} />
        <Route path="/blogCard" element={<BlogCard />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
