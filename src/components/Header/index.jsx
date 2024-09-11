import React, { useState, useEffect } from 'react';
import { FaApple, FaSearch, FaShoppingBag, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const navSections = [
  { title: "Testimonials" },
  { title: "Features" },
  { title: "Contact Us" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isStoreMenuOpen, setIsStoreMenuOpen] = useState(false);
  const [isSupportMenuOpen, setIsSupportMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  const handleSearchClick = () => {
    alert(`Searching for: ${searchTerm}`);
  };

  const handleAppleClick = () => {
    window.location.href = "/";
  };

  // Lock scrolling on body when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
  }, [isMobileMenuOpen]);

  return (
    <header className="w-full py-5 sm:px-10 px-5 flex flex-col sm:flex-row justify-between items-center bg-black text-white relative">
      <nav className="flex w-full items-center justify-between">
        {/* Apple Logo */}
        <div className="flex items-center">
          <FaApple
            aria-label="Apple Logo"
            size={24}
            className="text-white cursor-pointer"
            onClick={handleAppleClick}
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          aria-label="Menu"
          className="sm:hidden text-white absolute top-5 right-5 z-50"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Navigation List */}
        <ul className={`fixed inset-0 z-40 bg-black text-white p-5 transition-transform duration-300 transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} sm:static sm:flex sm:space-x-8 sm:translate-x-0`}>
          {navSections.map((section) => (
            <li key={section.title} className="text-lg cursor-pointer hover:text-blue-400 mb-4 sm:mb-0">
              <Link to={section.title.toLowerCase().replace(/\s/g, '-')} smooth={true} duration={500} className="block">{section.title}</Link>
            </li>
          ))}
          {/* Store Dropdown */}
          <li className="relative mb-4 sm:mb-0">
            <button
              onClick={() => setIsStoreMenuOpen(!isStoreMenuOpen)}
              className="text-lg cursor-pointer hover:text-blue-400 flex justify-between w-full"
            >
              Store <FaBars />
            </button>
            {isStoreMenuOpen && (
              <ul className="absolute left-0 top-full mt-2 bg-black text-white border border-blue-400 transition-opacity duration-300">
                <li><a href="/store/new-arrivals" className="block px-4 py-2 hover:bg-blue-400">New Arrivals</a></li>
                <li><a href="/store/best-sellers" className="block px-4 py-2 hover:bg-blue-400">Best Sellers</a></li>
                <li><a href="/store/sale" className="block px-4 py-2 hover:bg-blue-400">Sale</a></li>
              </ul>
            )}
          </li>

          {/* Support Dropdown */}
          <li className="relative mb-4 sm:mb-0">
            <button
              onClick={() => setIsSupportMenuOpen(!isSupportMenuOpen)}
              className="text-lg cursor-pointer hover:text-blue-400 flex justify-between w-full"
            >
              Support <FaBars />
            </button>
            {isSupportMenuOpen && (
              <ul className="absolute left-0 top-full mt-2 bg-black text-white border border-blue-400 transition-opacity duration-300">
                <li><a href="/support/contact" className="block px-4 py-2 hover:bg-blue-400">Contact</a></li>
                <li><a href="/support/faq" className="block px-4 py-2 hover:bg-blue-400">FAQ</a></li>
                <li><a href="/support/returns" className="block px-4 py-2 hover:bg-blue-400">Returns</a></li>
              </ul>
            )}
          </li>
        </ul>

        {/* Search Bar and Icons */}
        <section className={`flex items-center gap-6 ${isMobileMenuOpen ? 'flex-col' : 'flex-row'} sm:gap-6`}>
          <div className={`flex hidden sm:block items-center ${isMobileMenuOpen ? 'w-full justify-center' : 'justify-between'}`}>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              className="bg-gray-800 text-white rounded-l-lg p-2 sm:p-3 text-sm sm:text-base w-32 relative sm:w-auto"
            />
            <button
              aria-label="Search"
              className="p-2 rounded-r-lg bg-gray-700 hover:bg-gray-600 text-white"
              onClick={handleSearchClick}
            >
              <FaSearch size={22} />
            </button>
          </div>

          {/* Shopping Bag Icon (hidden on mobile) */}
          <button aria-label="Shopping Bag" className="relative text-white hidden sm:block">
            <FaShoppingBag size={22} />
          </button>
        </section>

      </nav>

      {/* Prevent scrolling when menu is open */}
      {isMobileMenuOpen && <div className="fixed inset-0 bg-black opacity-50 z-30" onClick={toggleMobileMenu}></div>}
    </header>
  );
};

export default Header;
