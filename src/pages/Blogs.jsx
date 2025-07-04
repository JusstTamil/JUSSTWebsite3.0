import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Blogs = () => {
  document.title = "Blogs - JUSST";
  return (
    <React.Fragment>
      <div className="bg-myBlack">
        <Navbar />
        <BlogLander />
        <BlogList />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Blogs;

const BlogLander = () => {
  return (
    <React.Fragment>
      <div className="wrapper md:h-44 h-auto flex justify-around items-center flex-col md:flex-row gap-7 p-5">
        <div className="left">
          <a
            href="https://jusstblogs.wordpress.com"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <img
              src="JUSSTChannelProfile.jpg"
              alt="Our Logo"
              className="w-32 rounded-full"
            />
          </a>
        </div>
        <div className="right text-center flex flex-col gap-3">
          <h1 className="text-4xl font-bold text-myWhite">
            JUSST Blogs
          </h1>
          <h2 className="text-xl font-medium text-myWhite">
            Take a deep dive from the concepts discussed in Video. <br />
            For Greater Understanding of wider concepts ; )
          </h2>
        </div>
        <a
          href="https://jusstblogs.wordpress.com"
          className="bg-sky-600 font-bold px-5 py-3 rounded-xl hover:underline text-white"
        >
          Go to Site
        </a>
      </div>
    </React.Fragment>
  );
};

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Helper to check if cached data is fresh (less than 1 day old)
  const getStoredBlogs = () => {
    const saved = localStorage.getItem('blogsWithTimestamp');
    if (!saved) return null;
    try {
      const { blogs, timestamp } = JSON.parse(saved);
      if (Date.now() - timestamp < 24 * 60 * 60 * 1000) {
        return blogs;
      }
      return null;
    } catch {
      return null;
    }
  };

  useEffect(() => {
    const cachedBlogs = getStoredBlogs();
    if (cachedBlogs) {
      setBlogs(cachedBlogs);
      setLoading(false);
    } else {
      fetch(
        "https://public-api.wordpress.com/rest/v1/sites/jusstblogs.wordpress.com/posts"
      )
        .then((response) => {
          if (!response.ok) {
            setLoading(false);
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setLoading(false);
          setBlogs(data.posts);
          localStorage.setItem(
            'blogsWithTimestamp',
            JSON.stringify({ blogs: data.posts, timestamp: Date.now() })
          );
        })
        .catch((error) => {
          setError(error);
          console.error("There was a problem with the fetch operation:", error);
        });
    }
  }, []);

  if (loading) {
    return <div className="w-5/6 bg-slate-400 min-h-screen flex justify-center items-center mx-auto m-5"><div className="loader"></div></div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <React.Fragment>
      <div className="blogListWrapper flex flex-row flex-wrap w-5/6 mx-auto gap-5 justify-around items-center p-5 mb-5">
        {blogs.map((blog) => (
          <BlogCard key={blog.ID} title={blog.title} link={blog.URL} excerpt={blog.excerpt} />
        ))}
      </div>
    </React.Fragment>
  );
};


const BlogCard = ({ title, link, excerpt, id }) => {
  return (
    <a
      href={link}
      className="blogcard md:w-72 w-full md:h-80 p-2 border-[3px] rounded-md border-myWhite hover:shadow-md hover:-translate-y-1 transition-transform hover:border-sky-500 hover:bg-sky-500 transition-colors"
    >
      <div className="blogCard flex justify-between h-full flex-col items-start p-2" id={`${id}-blogCard`}>
        <h2
          className="blogHeading text-xl md:text-2xl font-semibold p-2"
          id={`${id}-blogHeading`}
        >
          {title}
        </h2>
        <a href={link} className="bg-sky-500 p-2 rounded-md text-white font-medium self-end">Read more</a>
      </div>
    </a>
  );
};
