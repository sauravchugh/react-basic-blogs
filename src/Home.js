// import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";


const Home = () => {

  const {error,isPending, data:blogs} = useFetch('http://localhost:8000/blogs');        //we could have also used array but then we need to be mindful of the order   
                        //alisaing data as blogs to this specific fetch
  return (
    <div className="home">
    {error && <div>{error}</div>}   
    {isPending && <div>Loading...</div>}   
   {blogs && <BlogList blogs = {blogs} title = "All Blogs"/>}                     
    </div>
  );
}
 
export default Home;