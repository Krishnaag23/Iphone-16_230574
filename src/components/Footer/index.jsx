import React from 'react';
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const links = [
    { label: "About Apple", href: "https://www.apple.com/about/" },
    { label: "Privacy Policy", href: "https://www.apple.com/legal/privacy/" },
    { label: "Terms of Use", href: "https://www.apple.com/legal/internet-services/terms/site.html" },
    { label: "Contact Us", href: "https://www.apple.com/contact/" },
    { label: "Support", href: "https://support.apple.com/" },
  ];

  const socialLinks = [
    { icon: <FaFacebook />, href: "https://www.facebook.com/apple" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/apple/" },
    { icon: <FaTwitter />, href: "https://twitter.com/apple" },
    { icon: <FaYoutube />, href: "https://www.youtube.com/apple" },
  ];

  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-6">
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
            <p className="mb-4">Stay updated with the latest news and offers.</p>
            <form className="flex w-full md:w-2/3">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="p-2 rounded-l-lg bg-gray-800 placeholder-gray-400 border border-gray-600 flex-grow focus:outline-none"
              />
              <button className="p-2 bg-gray-700 rounded-r-lg hover:bg-gray-600">
                Subscribe
              </button>
            </form>
            <div className="flex space-x-4 mt-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-gray-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Social Link"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              {links.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-gray-300" target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Apple Store</h2>
            <p className="mb-4">Explore the latest devices and offers on the Apple Store.</p>
            <p>Copyright © 2024 Apple Inc. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
