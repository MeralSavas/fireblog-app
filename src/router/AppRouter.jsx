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

// import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path="/" element = {<PrivateRouter/>}> */}
        <Route path="/" element={<DashBoard />} />
        {/* </Route> */}
        <Route path="/login" element={<Login />} />
        <Route path="/details" element={<Details />} />
        <Route path="/newblog" element={<NewBlog />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/updateblog" element={<UpdateBlog />} />
        <Route path="/blogcard" element={<BlogCard />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
