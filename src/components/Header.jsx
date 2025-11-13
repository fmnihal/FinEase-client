import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
import { Wallet, Menu, X, LogOut, UserRoundPen } from 'lucide-react';

export default function Header() {
  const { user, loading, logoutUser } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate= useNavigate();
  const handleLogout = async () => {
    try {
      await logoutUser();
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  const NavLinkItem = ({ to, children }) => (
    <li>
      <NavLink to={to} onClick={closeMobileMenu} className={({ isActive }) =>
          `block py-2 px-3 rounded ${
            isActive
              ? 'bg-teal-600 text-white'
              : 'text-gray-700 hover:bg-gray-100'
          } lg:bg-transparent lg:text-gray-700 lg:p-0 lg:hover:text-teal-600`
        }
      >{children}</NavLink>
    </li>
  );

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Wallet className="h-7 w-7 text-teal-600" />
          <span className="text-2xl font-bold text-gray-900">FinEase</span>
        </Link>

        <div className="hidden lg:flex items-center space-x-6">
          {loading ? (
            <span className="text-gray-500">Loading...</span>
          ) : user ? (
            <>
              <ul className="flex space-x-6">
                <NavLinkItem to="/dashboard">Dashboard</NavLinkItem>
                <NavLinkItem to="/my-transactions">My Transactions</NavLinkItem>
                <NavLinkItem to="/add-transaction">Add Transactions</NavLinkItem>
                <NavLinkItem to="/reports">Reports</NavLinkItem>
                <NavLinkItem to="/settings">Settings</NavLinkItem>
              </ul>
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-600 flex gap-2 items-center"><UserRoundPen size={30} /> Hi, {user.displayName || user.email.split('@')[0]}</span><button onClick={handleLogout} className="bg-red-500 text-white font-bold p-2 rounded-full hover:bg-red-600 transition duration-300" title="Logout"><LogOut className="h-5 w-5" /></button>
              </div>
            </>
          ) : (
            <div className="flex items-center space-x-3">
              <Link to="/login" className="text-gray-600 font-medium hover:text-teal-600">Login</Link>
              <Link to="/register" className="bg-teal-600 text-white font-bold py-2 px-5 rounded-lg hover:bg-teal-700 transition duration-300">Sign Up</Link>
            </div>
          )}
        </div>
        <div className="lg:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-700 hover:text-teal-600">
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute w-full bg-white shadow-lg py-4">
          {loading ? (
            <span className="block text-center text-gray-500 px-4">Loading...</span>
          ) : user ? (
            <ul className="flex flex-col space-y-2 px-5">
              <NavLinkItem to="/dashboard">Dashboard</NavLinkItem>
              <NavLinkItem to="/my-transactions">My Transactions</NavLinkItem>
              <NavLinkItem to="/add-transaction">Add Transactions</NavLinkItem>
              <NavLinkItem to="/reports">Reports</NavLinkItem>
              <NavLinkItem to="/settings">Settings</NavLinkItem>
              <li>
                <button onClick={() => {
                    handleLogout();
                    closeMobileMenu();
                  }} className="w-full text-left py-2 px-3 rounded text-red-600 hover:bg-red-50">Logout</button>
              </li>
            </ul>
          ) : (
            <div className="flex flex-col space-y-3 px-5">
              <Link to="/login" onClick={closeMobileMenu} className="block text-center text-gray-700 font-medium py-2 px-4 rounded-lg hover:bg-gray-100">Login</Link>
              <Link to="/register" onClick={closeMobileMenu} className="block text-center bg-teal-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-teal-700 transition duration-300">Sign Up</Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
}