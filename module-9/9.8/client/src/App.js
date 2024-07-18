import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import BlogItem from './pages/BlogItem';
import About from './pages/About';
import Projects from './pages/Projects';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import LoginPage from './pages/Login';
import NotFound from './pages/NotFound';
import ExamplePrivatePage from './pages/ExamplePrivatePage';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogItem />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/private-page"
          element={
            <ProtectedRoute>
              <ExamplePrivatePage />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
