import './Blog.css'

function Blog({ Blogpost }) 

{

  // Blogpost.map(blog=>console.log(blog));
  return (
    <div className='Grid-item'>
      {Blogpost.map((blog,index) => (
        
        <div className='Grid--item' key={index}>
          <h2>{blog.title}</h2>
          <p className='Blog--author'>Author: {blog.author}</p>
          <p>{blog.content}</p>
          <a href={blog.link}>Read More</a>
        </div>
      ))}
    </div>
  );
}

export default Blog;
