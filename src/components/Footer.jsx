// src/components/Footer.jsx
import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="footer" className="bg-[#0D1117] scroll-mt-24 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {/* Brand Section */}
        <div className="col-span-1">
          <h2 className="text-xl font-semibold mb-4">TapNova</h2>
          <p className="text-gray-400 mb-6">
            Powering seamless digital solutions for businesses worldwide. Building secure,
            scalable software that drives growth.
          </p>
          <div className="flex space-x-4">
            <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-xl hover:text-blue-500 transition" />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-xl hover:text-blue-400 transition" />
            </a>
            <a href="https://github.com" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-xl hover:text-gray-300 transition" />
            </a>
          </div>
        </div>

        {/* Solutions */}
        <div>
          <h4 className="font-semibold mb-4">Solutions</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition">Custom Software</a></li>
            <li><a href="#" className="hover:text-white transition">API Integration</a></li>
            <li><a href="#" className="hover:text-white transition">Mobile & Web Apps</a></li>
            <li><a href="#" className="hover:text-white transition">Cloud Solutions</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#about" className="hover:text-white transition">About</a></li>
            <li><a href="#careers" className="hover:text-white transition">Careers</a></li>
            <li><a href="#blog" className="hover:text-white transition">Blog</a></li>
            <li><a href="#press" className="hover:text-white transition">Press</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#case-studies" className="hover:text-white transition">Case Studies</a></li>
            <li><a href="#docs" className="hover:text-white transition">Documentation</a></li>
            <li><a href="#guides" className="hover:text-white transition">Guides</a></li>
            <li><a href="#status" className="hover:text-white transition">API Status</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#contact" className="hover:text-white transition">Contact Us</a></li>
            <li><a href="#support" className="hover:text-white transition">Support</a></li>
            <li><a href="#privacy" className="hover:text-white transition">Privacy</a></li>
            <li><a href="#terms" className="hover:text-white transition">Terms</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} TapNova. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;