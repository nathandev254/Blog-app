import React from "react";
import Blog from './Blog'
import Highlights from './Highlights'

function Home({blogPosts}) {
  return (
    <div>
      <div className="Grid">
        <Blog className="Grid--1" Blogpost={blogPosts}></Blog>
        <Highlights Highlightpost={blogPosts} />
      </div>
    </div>
  );
}

export default Home;
