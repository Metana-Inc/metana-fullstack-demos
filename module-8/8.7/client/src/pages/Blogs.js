import { useEffect, useState } from 'react';
import axios from 'axios';

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
        console.log('fetch data error: ' + result.status);
      }
    }
    getBlogs();
  }, []);

  return (
    <div>
      <h2>Blogs</h2>
      <p>This is the Blogs page</p>
      {blogs.length ? (
        <div className="all-blogs">
          <h3>All blogs:</h3>
          <ul>
            {blogs.map((b) => (
              <li key={`blog-${b._id}`}>{b.title}</li>
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
