import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Readmore from "./pages/Readmore";
import Error from "./pages/Error";
import Home from "./components/Home";
import Header from "./components/header";
import Footer from "./components/Footer";

function App() {
  const blogPosts = [
    {
      title: "Getting Started with React",
      author: "John Doe",
      link: "https://example.com/getting-started-with-react",
      content:
        "This blog post covers the basics of getting started with React and explains key concepts and terminology.",
    },
    {
      title: "Mastering CSS Grid Layout",
      author: "Jane Smith",
      link: "https://example.com/mastering-css-grid-layout",
      content:
        "In this post, you will learn advanced techniques for creating responsive layouts using CSS Grid.",
    },
    {
      title: "The Art of JavaScript",
      author: "Alex Johnson",
      link: "https://example.com/the-art-of-javascript",
      content:
        "Discover the beauty and power of JavaScript as we explore its core features and best practices.",
    },
  ];

  return (
    <BrowserRouter>
      <div className="Hero--content">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home blogPosts={blogPosts} />}></Route>
          <Route
            path="/Readmore"
            element={<Readmore content={blogPosts.content} />}
          ></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
        <Footer className="Footer" />
      </div>
    </BrowserRouter>
  );
}

export default App;
