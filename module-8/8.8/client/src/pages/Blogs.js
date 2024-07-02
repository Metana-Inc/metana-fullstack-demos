import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Blogs.css';

// If a text string content is over 50 characters, shorten it and add a '...'.
const shortenContent = (content) => {
  if (content.length > 50) {
    return content.substring(0, 50) + '...';
  }
  return content;
};

// A single item in the blogs list
function BlogItem({ blog }) {
  const blogId = blog._id;
  const preview = shortenContent(blog.content); // Short preview of the blog content
  return (
    <li key={`blog-${blogId}`} className="blog-item">
      <Link to={`/blogs/${blogId}`}>
        <span>{blog.title}</span>
      </Link>
      <span>{preview}</span>
    </li>
  );
}

function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    console.log('=== debug: fetching blogs data...');
    async function getBlogs() {
      const result = await axios.get('/api/blogs');
      if (result && result.status === 200) {
        console.log('=== debug: data returned: ', result.data);
        setBlogs(result.data);
      } else {
        console.error('fetch data error: ' + result.status);
      }
    }
    getBlogs();
  }, []);

  return (
    <div>
      <h2>Blogs</h2>
      <p>This is the Blogs page</p>
      {blogs.length ? (
        <div id="all-blogs">
          <h3>All blogs:</h3>
          <ul className="blogs-list">
            {blogs.map((b) => (
              <BlogItem blog={b} />
            ))}
          </ul>
        </div>
      ) : (
        <p> No blogs data </p>
      )}
    </div>
  );
}

export default Blogs;
