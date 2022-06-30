import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./UseFetch";

const Home = () => {
  const { data: blogs, isPending, error } = useFetch("http://localhost:8000/blogs")

  

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs..." />}
      {/* <button onClick={() => setName('Gomez')} >change name</button> */}
      {/* <p style={{color:"orangered", size:"10px"}}>{ name }</p> */}
      {/* {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === 'mark')} title="mark's blogs" />} */}
    </div>
  );
};

export default Home;
