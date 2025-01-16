"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <header className="bg-green3 text-gray-200 flex flex-wrap lg:flex-nowrap w-full items-center">
      {/* Logo Section */}
        <div className="bg-white w-fit h-[111px] flex items-center px-4">
          <Link href="/">
            <img
              src="/images/logo.png"
              alt="Logisco Logo"
              className="w-32 h-auto"
            />
          </Link>
        </div>
        
      <div className="smallflex flex-1 ">  
        {/* Hamburger Menu */}
        <button
          className="lg:hidden ml-auto text-orange p-4"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Top Bar */}
        <div className="bg-green3 py-2 border-b-2 border-line hidden lg:block">
          <div className="container mx-auto flex justify-between items-center px-4 text-sm">
            <div className="flex space-x-6">
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-orange"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>lgiscotransporting.ltd@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-orange"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" />
                </svg>
                <span>8:00am - 10:00pm</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-orange"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
                <span>17 Street 16th Ave SE, WA 98195</span>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex bg-green3 xl:ml-[17%]">
          <div className="container mx-auto flex justify-between items-center px-4">
            <div className="xl:border-x-2 border-line w-[50%] items-center flex md:m-auto h-full pt-[2%]">
              <nav className="space-x-6 m-auto">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`${
                      pathname === item.href
                        ? "text-orange"
                        : "text-gray-200 hover:text-orange"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex items-center space-x-4 pt-[2%]">
              <span className="text-gray-200">Call Us Anytime:</span>
              <span className="text-gray-200 font-bold">+011 775 643 21</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } bg-green3 lg:hidden px-4 py-4`}
      >
        <nav className="flex flex-col space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${
                pathname === item.href
                  ? "text-orange"
                  : "text-gray-200 hover:text-orange"
              }`}
              onClick={() => setMenuOpen(false)} // Close menu on link click
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col space-y-2 mt-4">
          <span className="text-gray-200">Call Us Anytime:</span>
          <span className="text-gray-200 font-bold">+011 775 643 21</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
