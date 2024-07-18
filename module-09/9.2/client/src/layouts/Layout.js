// Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

function Layout() {
  return (
    <div
      id="container"
      style={{
        height: 'calc(100vh - 7rem)',
        position: 'static',
      }}
    >
      <Navigation />
      <main id="content" className="min-h-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
