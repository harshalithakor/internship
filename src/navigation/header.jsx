import React, { useState, useContext } from "react";
import logo from "/assets/logo.png";
import { ProductContext } from "../Context/context";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { query, setQuery } = useContext(ProductContext);

  return (
    <header className="bg-purple-300 shadow-lg">
      <nav className="container mx-auto px-3 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <img
              src={logo}
              alt="Company Logo"
              className="h-20 w-20 md:w-30 object-fill cursor-pointer"
            />
          </Link>
        </div>

        <div className="hidden md:block w-full max-w-md mx-6">
          <input
            type="search"
            placeholder="Search product..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full p-2 border rounded-lg"
          />
        </div>

        <div className="hidden md:flex space-x-8">
          <Link href="/" className="font-medium">
            Home
          </Link>
          <Link to="/about" className="font-medium">
            About
          </Link>
          <Link to="/contact" className="font-medium">
            Contact
          </Link>
          <Link to="/create" className="font-medium">
            Product
          </Link>
        </div>

        <button
          className="md:hidden text-black text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-purple-200 px-4 pb-4 space-y-3">
          <input
            type="search"
            placeholder="Search product..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full p-2 border rounded"
          />

          <a href="/" className="block font-medium">
            Home
          </a>
          <a href="/about" className="block font-medium">
            About
          </a>
          <a href="/contact" className="block font-medium">
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
