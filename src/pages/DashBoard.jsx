import React, { useState } from "react";
import { useContactListener } from "../helpers/firebase";
import BlogCard from "../components/BlogCard";

const DashBoard = () => {
  const [blogList, setBlogList] = useState([]);
  useContactListener(setBlogList);

  return (
    <div>
      {blogList.map((item) => {
        return <BlogCard key={item.id} {...item} />;
      })}
    </div>
  );
};

export default DashBoard;
