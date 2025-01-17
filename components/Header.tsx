"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Zap, Menu, X, PhoneCall, MailCheck } from "lucide-react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import clsx from "clsx";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const menuRef = useRef<HTMLDivElement | null>(null)

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleMouseLeave = (event: React.MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.relatedTarget as Node)) {
      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-[111] bg-white shadow-2xl">
      {/* Top Bar */}
      <div className=" w-full flex flex-col items-start md:flex-row justify-end gap-2 md:gap-10 bg-gray-800 p-4 md:px-6">
        <Link href="/contact" className="flex  items-center flex-row text-white">
          <MailCheck className=" h-8 w-8 md:h-10 md:w-14 mr-2" />
          <div className="flex items-start justify-start flex-col">
            <p className="text-sm">Contact Us</p>
            <span> info@eliteelectrical.com</span>
          </div>
        </Link>
        <Link href="tel:0777888999" className="flex items-center gap-2 flex-row text-white">
          <PhoneCall className="h-8 w-8 md:h-10 md:w-14" />
          <div className="flex items-start justify-start flex-col">
            <p className="text-sm">Call Us</p>
            <Button
              variant="default"
              className="flex flex-row items-center bg-yellow-400 hover:bg-yellow-600 text-white"
            >
              0777888999
            </Button>
          </div>
        </Link>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Zap className="h-8 w-8 text-yellow-500" />
            <span className="ml-2 text-2xl font-bold text-gray-800">
              Elite Electrical
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-3 space-x-6 relative">
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1 }}
                className="relative"
              >
                <Link
                  href={link.path}
                  className={clsx(
                    "text-lg font-bold hover:text-yellow-500 transition",
                    pathname === link.path
                      ? "text-yellow-500"
                      : "text-gray-900"
                  )}
                >
                  {link.name}
                </Link>
                {pathname === link.path && (
                  <motion.div
                    layoutId="activeLink"
                    className="absolute bottom-[-4px] left-0 w-full h-[3px] bg-yellow-500 rounded-full"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 hover:text-yellow-500 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          ref={menuRef}
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          className="md:hidden bg-white shadow-lg overflow-hidden"
          onMouseLeave={handleMouseLeave}
        >
          <div className="px-4 py-3 space-y-2">
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1 }}
                className="relative"
              >
                <Link
                  href={link.path}
                  className={clsx(
                    "block text-lg font-semibold transition",
                    pathname === link.path
                      ? "text-yellow-500"
                      : "text-gray-700 hover:text-yellow-500"
                  )}
                  onClick={toggleMenu}
                >
                  {link.name}
                </Link>
                {pathname === link.path && (
                  <motion.div
                    layoutId="activeLinkMobile"
                    className="absolute bottom-[-4px] left-0 w-full h-[3px] bg-yellow-500 rounded-full"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
              </motion.div>
            ))}
            <Button
              variant="default"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white mt-4"
            >
              <Link href="/contact" onClick={toggleMenu}>Get a Quote</Link>
            </Button>
          </div>
        </motion.div>
      )}
    </header>
  );
};
