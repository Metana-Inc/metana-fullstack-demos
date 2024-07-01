// Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

function Layout() {
  return (
    <div>
      <Navigation />
      <main id="content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
