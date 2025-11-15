import React from 'react';
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <ToastContainer />
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}
export default App;