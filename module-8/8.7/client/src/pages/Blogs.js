import { useEffect, useState } from 'react';
import axios from 'axios';

function Blogs() {
  const [blogs, setBlogs] = useState();

  useEffect(() => {
    console.log('=== debug: fetching blogs data...');
    async function getBlogs() {
      const data = await axios.get('/api/blogs');
      console.log('=== debug: data returned:', data);
    }
    getBlogs();
  }, []);

  return (
    <div>
      <h2>Blogs</h2>
      <p>This is the Blogs page</p>
    </div>
  );
}

export default Blogs;
