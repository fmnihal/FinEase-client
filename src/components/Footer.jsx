import React from 'react';
import { Wallet } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
        <aside>
            <Wallet />
            <p>FinEase<br />Providing reliable tech since 1992</p>
        </aside>
        <nav>
            <h6 className="footer-title">Terms & Conditions</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
        </nav>
        <nav>
            <h6 className="footer-title">Social Media Links</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
        </nav>
        </footer>
    );
};

export default Footer;