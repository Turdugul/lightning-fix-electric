"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem } from "@/components/ui/navigation-menu";


export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <Zap className="h-8 w-8 text-yellow-500" />
              <span className="ml-2 text-xl font-bold">Elite Electrical</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <NavigationMenu className="flex space-x-4">
              <NavigationMenuItem>
                <Link href="/" className="text-gray-700 hover:text-yellow-500 px-3 py-2">
                  Home
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" className="text-gray-700 hover:text-yellow-500 px-3 py-2">
                  About
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" className="text-gray-700 hover:text-yellow-500 px-3 py-2">
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenu>
            <Button variant="default" className="bg-yellow-500 hover:bg-yellow-600 text-white">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-yellow-500 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 text-gray-700 hover:text-yellow-500"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-gray-700 hover:text-yellow-500"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-gray-700 hover:text-yellow-500"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Button variant="default" className="w-full bg-yellow-500 hover:bg-yellow-600 text-white mt-4">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
