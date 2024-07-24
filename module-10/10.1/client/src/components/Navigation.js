import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
function NavItem({ url, children }) {
  return (
    <Link
      className="px-4 py-2 mx-2 my-2 border border-x-0 border-t-0 border-b-green-500 text-green-500 bg-white rounded-sm hover:bg-green-500 hover:text-white"
      to={url}
    >
      {children}
    </Link>
  );
}

// Plain navigation link without underline
function NavItemPlain({ url, children }) {
  return (
    <Link
      className="px-4 py-2 mx-2 my-2 text-green-500 bg-white rounded-sm hover:bg-green-500 hover:text-white"
      to={url}
    >
      {children}
    </Link>
  );
}

function Navigation() {
  const { isLoggedIn, user } = useAuth();
  return (
    <nav id="navigation" className="flex flex-row justify-end">
      <NavItem url="/">Home</NavItem>
      <NavItem url="/blogs">Blogs</NavItem>
      <NavItem url="/about">About</NavItem>
      <NavItem url="/projects">Projects</NavItem>
      <NavItem url="/private-page">Private page</NavItem>
      <NavItem url="/contact">Contact</NavItem>
      {isLoggedIn ? (
        <NavItemPlain url="/profile">{user.name}</NavItemPlain>
      ) : (
        <NavItemPlain url="/login">Log in</NavItemPlain>
      )}
    </nav>
  );
}

export default Navigation;
