import "./App.css";
import Blog from "./components/Blog";
import Highlights from "./components/Highlights";
import Footer from "./components/Footer";

function App() {

  const blogPosts = [
    {
      title: 'Getting Started with React',
      author: 'John Doe',
      link: 'https://example.com/getting-started-with-react',
      content: 'This blog post covers the basics of getting started with React and explains key concepts and terminology.'
    },
    {
      title: 'Mastering CSS Grid Layout',
      author: 'Jane Smith',
      link: 'https://example.com/mastering-css-grid-layout',
      content: 'In this post, you will learn advanced techniques for creating responsive layouts using CSS Grid.'
    },
    {
      title: 'The Art of JavaScript',
      author: 'Alex Johnson',
      link: 'https://example.com/the-art-of-javascript',
      content: 'Discover the beauty and power of JavaScript as we explore its core features and best practices.'
    }
  ];

  return (
    <div className="Hero--content">
      <h1 className="header">Blog</h1>
      <div className="Grid">
        <Blog className="Grid--1" Blogpost={blogPosts}></Blog>
        <Highlights Highlightpost={blogPosts} />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
