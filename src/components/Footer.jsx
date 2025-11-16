import React from 'react';
import { Link } from 'react-router-dom';
import { Wallet, Facebook, Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400">
        
        <div className="container mx-auto px-6 pt-10 pb-5">
            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    
                    <div className='flex flex-col items-center md:items-start'>
                        <div className="flex items-center gap-2 mb-4">
                            <Wallet className="h-7 w-7 text-teal-500" />
                            <span className="text-2xl font-bold text-white">FinEase</span>
                        </div>
                        {/* <p className="mb-6 text-center md:text-left">Providing reliable tech since 1992</p> */}
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-white" title="Facebook"><Facebook size={20} /></a>
                            <a href="#" className="hover:text-white" title="Twitter"><Twitter size={20} /></a>
                            <a href="#" className="hover:text-white" title="LinkedIn"><Linkedin size={20} /></a>
                            <a href="#" className="hover:text-white" title="GitHub"><Github size={20} /></a>
                        </div>
                    </div>
                    
                    <div className='text-center md:text-left'>
                        <h6 className="font-semibold text-white uppercase mb-4">Terms & Conditions</h6>
                        <nav className="flex flex-col space-y-2">
                            <Link to="/terms" className="hover:text-white hover:underline">Terms of use</Link>
                            <Link to="/privacy" className="hover:text-white hover:underline">Privacy policy</Link>
                            <Link to="/cookies" className="hover:text-white hover:underline">Cookie policy</Link>
                        </nav>
                    </div>
                    
                    <div className='text-center md:text-left'>
                        <h6 className="font-semibold text-white uppercase mb-4">Company</h6>
                        <nav className="flex flex-col space-y-2">
                            <Link to="/about" className="hover:text-white hover:underline">About us</Link>
                            <Link to="/contact" className="hover:text-white hover:underline">Contact</Link>
                            <Link to="/jobs" className="hover:text-white hover:underline">Career</Link>
                        </nav>
                    </div>
                    
                </div>
            </div>
        </div>
        
        <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6 text-center text-sm">
            <p>© {currentYear} FinEase. All rights reserved.</p>
        </div>
        </div>
      
    </footer>
  );
}