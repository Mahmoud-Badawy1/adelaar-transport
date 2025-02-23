"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "Over" },
    { href: "/services", label: "Diensten" },
    { href: "/contact", label: "Contact" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <header className="bg-green3 text-gray-200 flex flex-wrap lg:flex-nowrap w-full items-center">
      {/* Logo Section */}
        <div className="bg-green3 sm:ml-9 sm:mt-6 sm:w-40 sm:h-[125px] w-28 h-24 flex items-center px-4 bg-cover bg-center" style={{backgroundImage: "url('/logo.png')"}}>
            {/* <Image 
              src="/logo.png"
              alt="Adelaar Transport Logo"
              width={30}
              height={20}
              className="w-32 h-auto"
            /> */}
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
        <div className="bg-green3 py-2 border-b-2 border-line hidden lg:flex justify-between items-center w-full">
          <div className="container mx-auto flex justify-center items-center px-4 text-sm">
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
                <span>info@adelaartransport.nl</span>
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
                <span>De hazelaar 17, 6903BA Zevenaar</span>
              </div>
            </div>
          </div>
          {/* <div className="mx-auto flex justify-end items-center px-4 text-sm gap-5">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
  <path d="M22.675 0h-21.35C.59 0 0 .592 0 1.325v21.351C0 23.407.59 24 1.325 24h11.495v-9.294H9.695v-3.622h3.125V8.413c0-3.1 1.892-4.787 4.655-4.787 1.321 0 2.463.098 2.794.142v3.24h-1.917c-1.504 0-1.795.715-1.795 1.763v2.313h3.59l-.467 3.622h-3.124V24h6.124c.734 0 1.325-.592 1.325-1.325V1.325C24 .592 23.407 0 22.675 0z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
  <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482A13.978 13.978 0 011.671 3.149a4.93 4.93 0 001.523 6.573 4.902 4.902 0 01-2.23-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.927 4.927 0 004.6 3.417A9.867 9.867 0 010 19.54a13.933 13.933 0 007.548 2.212c9.142 0 14.308-7.721 13.995-14.646A9.936 9.936 0 0024 4.557z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 48 48">
  <path fill="#EA4335" d="M24 9.5c3.06 0 5.73 1.07 7.88 2.85l5.9-5.9C33.59 3.45 29.07 1.5 24 1.5 14.64 1.5 6.95 7.44 3.46 15.5l6.94 5.38C12.25 13.21 17.68 9.5 24 9.5z"/>
  <path fill="#34A853" d="M46.5 24c0-1.34-.12-2.64-.35-3.9H24v7.4h12.65c-.55 2.85-2.13 5.26-4.54 6.88l6.99 5.43C43.3 36.68 46.5 30.85 46.5 24z"/>
  <path fill="#FBBC05" d="M10.4 28.08A11.97 11.97 0 0 1 9.5 24c0-1.42.24-2.79.7-4.08l-6.94-5.38C1.46 17.53 0 20.64 0 24c0 3.36 1.46 6.47 3.76 8.92l6.64-4.84z"/>
  <path fill="#4285F4" d="M24 46.5c5.52 0 10.19-1.82 13.58-4.92l-6.99-5.43c-1.91 1.28-4.38 2.05-6.59 2.05-6.33 0-11.67-3.73-14.26-9.07L3.76 32.92C7.25 40.98 14.94 46.5 24 46.5z"/>
</svg>
          </div> */}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex bg-green3 xl:ml-[17%]">
          <div className="container mx-auto flex justify-between items-center px-4">
            <div className="xl:border-r-2 border-line w-[50%] items-center flex md:m-auto h-full pt-[2%]">
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
            <div className="p-2.5 rounded-full bg-coral-500/10">
            <div className="p-2 rounded-full bg-orange">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  </div>
                </div>
              <span className="text-gray-200">Bel ons op elk moment:</span>
              <span className="text-gray-200 font-bold">+31628964262</span>
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
          <span className="text-gray-200">Bel ons op elk moment:</span>
          <span className="text-gray-200 font-bold">+31628964262</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
