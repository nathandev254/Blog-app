import Readmore from "../pages/Readmore";
import "./Blog.css";
import {Link} from 'react-router-dom'
// import Readmore from '../pages/Readmore'

function Blog({ Blogpost }) {
  // Blogpost.map(blog=>console.log(blog));
  return (
    <div className="Grid-item">
      {Blogpost.map((blog, index) => (
        <div className="Grid--item" key={index}>
          <h2>{blog.title}</h2>
          <p className="Blog--author">Author: {blog.author}</p>
          <p>{blog.content}</p>
          <Link to='Readmore'>Read More</Link>
          
        </div>
      ))}
    </div>
  );
}

export default Blog;
