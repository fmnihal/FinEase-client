import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
import { Wallet, Menu, X, LogOut, UserRoundPen, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeProvider';

export default function Header() {
  const { user, loading, logoutUser } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate= useNavigate();
  const { theme, setTheme } = useTheme();
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
  const ThemeToggleBtn = () => (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border border-transparent dark:border-gray-700" title="Toggle Theme" >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5 text-yellow-500 transition-all" />
      ) : (
        <Moon className="h-5 w-5 text-gray-600 transition-all" />
      )}
    </button>
  );
  const NavLinkItem = ({ to, children }) => (
    <li>
      <NavLink 
        to={to} 
        onClick={closeMobileMenu} 
        className={({ isActive }) =>
          `block py-2 px-3 rounded-lg transition-colors ${
            isActive
              ? 'bg-teal-600 text-white'
              : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-teal-600 dark:hover:text-teal-400'
          } lg:bg-transparent lg:p-0 lg:hover:bg-transparent`
        }
      >
        {children}
      </NavLink>
    </li>
  );

  // return (
  //   <header className="bg-white shadow-md sticky top-0 z-50">
  //     <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
  //       <Link to="/" className="flex items-center gap-2">
  //         <Wallet className="h-7 w-7 text-teal-600" />
  //         <span className="text-2xl font-bold text-gray-900">FinEase</span>
  //       </Link>

  //       <div className="hidden lg:flex items-center space-x-6">
  //         {loading ? (
  //           <span className="text-gray-500">Loading...</span>
  //         ) : user ? (
  //           <>
  //             <ul className="flex space-x-6">
  //               <NavLinkItem to="/home">Home</NavLinkItem>
  //               <NavLinkItem to="/my-transactions">My Transactions</NavLinkItem>
  //               <NavLinkItem to="/add-transaction">Add Transaction</NavLinkItem>
  //               <NavLinkItem to="/reports">Reports</NavLinkItem>
  //               {/* <NavLinkItem to="/settings">Settings</NavLinkItem> */}
  //               {/* <NavLinkItem to="/profile"><UserRoundPen size={30} /></NavLinkItem> */}
  //             </ul>
  //             <div className="flex items-center space-x-3">
  //               {/* <span className="text-sm text-gray-600 flex gap-2 items-center"><UserRoundPen size={30} /> Hi, {user.displayName || user.email.split('@')[0]}</span> */}
  //               <Link to="/profile" className="text-sm text-gray-600 flex gap-2 items-center p-2 rounded-lg hover:bg-gray-100" title="View Profile"><UserRoundPen size={30} /> Hi, {user.displayName || user.email.split('@')[0]}</Link>
  //               <button onClick={handleLogout} className="bg-red-500 text-white font-bold p-2 rounded-full hover:bg-red-600 hover:cursor-pointer transition duration-300" title="Logout"><LogOut className="h-5 w-5" /></button>
  //             </div>
  //           </>
  //         ) : (
  //           <div className="flex items-center space-x-3">
  //             <Link to="/login" className="text-gray-600 font-medium hover:text-teal-600 hover:cursor-pointer">Login</Link>
  //             <Link to="/register" className="bg-teal-600 text-white font-bold py-2 px-5 rounded-lg hover:bg-teal-700 transition duration-300 hover:cursor-pointer">Sign Up</Link>
  //           </div>
  //         )}
  //       </div>
  //       <div className="lg:hidden">
  //         <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-700 hover:text-teal-600">
  //           {isMobileMenuOpen ? (
  //             <X className="h-6 w-6 hover:cursor-pointer" />
  //           ) : (
  //             <Menu className="h-6 w-6 hover:cursor-pointer" />
  //           )}
  //         </button>
  //       </div>
  //     </nav>

  //     {isMobileMenuOpen && (
  //       <div className="lg:hidden absolute w-full bg-white shadow-lg py-4">
  //         {loading ? (
  //           <span className="block text-center text-gray-500 px-4">Loading...</span>
  //         ) : user ? (
  //           <ul className="flex flex-col space-y-2 px-5">
  //             <NavLinkItem to="/home">Home</NavLinkItem>
  //             <NavLinkItem to="/my-transactions">My Transactions</NavLinkItem>
  //             <NavLinkItem to="/add-transaction">Add Transaction</NavLinkItem>
  //             <NavLinkItem to="/reports">Reports</NavLinkItem>
  //             {/* <NavLinkItem to="/profile">Profile</NavLinkItem> */}
  //             <Link to="/profile" className="text-[16px] text-gray-600 flex gap-2 items-center p-2 rounded-lg hover:bg-gray-100" title="View Profile"><UserRoundPen size={30} /> Hi, {user.displayName || user.email.split('@')[0]}</Link>
  //             <li>
  //               <button onClick={() => {
  //                   handleLogout();
  //                   closeMobileMenu();
  //                 }} className="w-full text-left py-2 px-3 rounded text-red-600 hover:bg-red-50 hover:cursor-pointer">Logout</button>
  //             </li>
  //           </ul>
  //         ) : (
  //           <div className="flex flex-col space-y-3 px-5">
  //             <Link to="/login" onClick={closeMobileMenu} className="block text-center text-gray-700 font-medium py-2 px-4 rounded-lg hover:bg-gray-100 hover:cursor-pointer">Login</Link>
  //             <Link to="/register" onClick={closeMobileMenu} className="block text-center bg-teal-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-teal-700 transition duration-300 hover:cursor-pointer">Sign Up</Link>
  //           </div>
  //         )}
  //       </div>
  //     )}
  //   </header>
  // );


  return (
    <header className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 shadow-md sticky top-0 z-50 transition-colors duration-300 border-b dark:border-gray-800">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* --- LOGO --- */}
        <Link to="/" className="flex items-center gap-2 group">
          <Wallet className="h-8 w-8 text-teal-600 dark:text-teal-400 group-hover:scale-110 transition-transform" />
          <span className="text-2xl font-bold text-gray-800 dark:text-white">FinEase</span>
        </Link>

        {/* --- DESKTOP MENU --- */}
        <div className="hidden lg:flex items-center space-x-8">
          {loading ? (
            <span className="text-gray-500 dark:text-gray-400">Loading...</span>
          ) : user ? (
            <>
              <ul className="flex space-x-8 font-medium text-gray-600 dark:text-gray-300">
                <NavLinkItem to="/home">Home</NavLinkItem>
                <NavLinkItem to="/my-transactions">My Transactions</NavLinkItem>
                <NavLinkItem to="/add-transaction">Add Transaction</NavLinkItem>
                <NavLinkItem to="/reports">Reports</NavLinkItem>
              </ul>

              <div className="flex items-center space-x-4 border-l pl-6 border-gray-300 dark:border-gray-700">
                
                {/* 4. HERE IS THE BUTTON (Desktop) */}
                <ThemeToggleBtn />
                
                <Link 
                  to="/profile" 
                  className="text-sm font-medium text-gray-600 dark:text-gray-300 flex gap-2 items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition" 
                  title="View Profile"
                >
                  <UserRoundPen size={20} /> 
                  <span className="whitespace-nowrap">{user.displayName || 'User'}</span>
                </Link>
                
                <button 
                  onClick={handleLogout} 
                  className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 hover:shadow-lg transition duration-300" 
                  title="Logout"
                >
                  <LogOut className="h-4 w-4" />
                </button>
              </div>
            </>
          ) : (
            <div className="flex items-center space-x-4">
              {/* 5. HERE IS THE BUTTON (Logged Out Desktop) */}
              <ThemeToggleBtn />

              <Link to="/login" className="text-gray-600 dark:text-gray-300 font-medium hover:text-teal-600 dark:hover:text-teal-400 transition">Login</Link>
              <Link to="/register" className="bg-teal-600 text-white font-bold py-2 px-5 rounded-lg hover:bg-teal-700 transition duration-300 shadow-md">Sign Up</Link>
            </div>
          )}
        </div>

        {/* --- MOBILE CONTROLS --- */}
        <div className="lg:hidden flex items-center gap-4">
          {/* 6. HERE IS THE BUTTON (Mobile) */}
          <ThemeToggleBtn />
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="text-gray-700 dark:text-gray-300 hover:text-teal-600 focus:outline-none"
          >
            {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </nav>

      {/* --- MOBILE DROPDOWN MENU --- */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute w-full bg-white dark:bg-gray-900 border-t dark:border-gray-800 shadow-lg py-4 px-6 flex flex-col space-y-4 transition-colors duration-300">
          {loading ? (
            <span className="block text-center text-gray-500 dark:text-gray-400">Loading...</span>
          ) : user ? (
            <>
              <ul className="flex flex-col space-y-2">
                <NavLinkItem to="/home">Home</NavLinkItem>
                <NavLinkItem to="/my-transactions">My Transactions</NavLinkItem>
                <NavLinkItem to="/add-transaction">Add Transaction</NavLinkItem>
                <NavLinkItem to="/reports">Reports</NavLinkItem>
              </ul>
              
              <div className="border-t dark:border-gray-700 pt-4 flex flex-col gap-3">
                <Link 
                  to="/profile" 
                  onClick={closeMobileMenu}
                  className="flex items-center gap-3 text-gray-700 dark:text-gray-300 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <UserRoundPen size={20} /> 
                  <span className="whitespace-nowrap">Profile ({user.displayName || 'User'})</span>
                </Link>
                
                <button 
                  onClick={handleLogout} 
                  className="flex items-center gap-3 w-full text-left py-2 px-2 rounded-lg text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 font-medium"
                >
                  <LogOut size={20} /> Logout
                </button>
              </div>
            </>
          ) : (
            <div className="flex flex-col space-y-3">
              <Link 
                to="/login" 
                onClick={closeMobileMenu} 
                className="block text-center text-gray-700 dark:text-gray-200 font-medium py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 border dark:border-gray-700"
              >
                Login
              </Link>
              <Link 
                to="/register" 
                onClick={closeMobileMenu} 
                className="block text-center bg-teal-600 text-white font-bold py-3 rounded-lg hover:bg-teal-700 shadow-md"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  );



}