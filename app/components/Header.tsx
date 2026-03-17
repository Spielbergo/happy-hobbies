"use client";

import { useState } from "react";
import { Menu, X, Heart, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const socialLinks = [
  { href: "https://facebook.com", label: "Facebook", Icon: Facebook },
  { href: "https://instagram.com", label: "Instagram", Icon: Instagram },
  { href: "https://twitter.com", label: "Twitter / X", Icon: Twitter },
  { href: "https://youtube.com", label: "YouTube", Icon: Youtube },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/hobbies", label: "Hobbies" },
  { href: "/community", label: "Community" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const close = () => setMobileOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2" onClick={close}>
            <Heart className="text-pink-500 fill-pink-500" size={28} />
            <span className="font-bold text-xl text-gray-900">Happy Hobbies</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`transition-colors ${
                  pathname === href
                    ? "text-pink-500 font-medium"
                    : "text-gray-700 hover:text-pink-500"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button className="hidden md:inline-flex px-6 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors">
              Get Started
            </button>
            <button
              className="md:hidden p-1 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="text-gray-700" size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={close}
        aria-hidden="true"
      />

      {/* Slide-out drawer */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile navigation"
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <Heart className="text-pink-500 fill-pink-500" size={22} />
            <span className="font-bold text-lg text-gray-900">Happy Hobbies</span>
          </div>
          <button
            onClick={close}
            className="p-1 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <X className="text-gray-700" size={22} />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col px-4 py-6 gap-1 flex-1">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={close}
              className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                pathname === href
                  ? "bg-pink-50 text-pink-600"
                  : "text-gray-700 hover:bg-gray-50 hover:text-pink-500"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Social links */}
        <div className="px-6 py-5 border-t border-gray-100">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Follow Us</p>
          <div className="flex items-center gap-3">
            {socialLinks.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-pink-500 hover:text-white transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="px-6 py-5 border-t border-gray-100">
          <button
            onClick={close}
            className="w-full py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors font-medium"
          >
            Get Started
          </button>
        </div>
      </aside>
    </>
  );
}