
import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiHeart } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Contact', path: '/contact' },
      { name: 'Careers', path: '#' },
      { name: 'Press', path: '#' }
    ],
    support: [
      { name: 'Help Center', path: '#' },
      { name: 'Shipping Info', path: '#' },
      { name: 'Returns', path: '#' },
      { name: 'Warranty', path: '#' }
    ],
    legal: [
      { name: 'Privacy Policy', path: '#' },
      { name: 'Terms of Service', path: '#' },
      { name: 'Cookie Policy', path: '#' },
      { name: 'Disclaimer', path: '#' }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <FiHeart className="text-white text-lg" />
              </div>
              <h3 className="text-xl font-bold">ElectroStore</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your trusted partner for the latest electronics and technology. 
              Quality products, competitive prices, exceptional service.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-400">
                <FiMail className="text-sm" />
                <span>Ahmed.shazly2019@gmail.com.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <FiPhone className="text-sm" />
                <span>+01001619103</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <FiMapPin className="text-sm" />
                <span>123 Tech Street, Cairo City</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => navigate(link.path)}
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-center md:text-left">
            © 2025 ElectroStore. All rights reserved.
          </p>
          <p className="text-gray-400 text-center md:text-right mt-4 md:mt-0">
            Made with <FiHeart className="inline text-red-500" />Ahmed Shazly  for tech enthusiasts
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
