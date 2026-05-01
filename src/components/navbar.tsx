"use client";

import { useState } from "react";
import { Link } from "@heroui/react";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import BookingButton from "./booking-button";


export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-primary/70 backdrop-blur-lg">
      <header className="mx-auto flex h-16 max-w-[1280px] items-center justify-between gap-4 px-6">
        <div className="flex items-center gap-4">
          <a className="flex items-center gap-1" href="/">
            <img
              src="/Images/text-logo.webp"
              alt="Logo"
              className="h-20 mt-4 w-auto max-w-[180px] object-contain"
            />

          </a>
          <ul className="hidden lg:flex items-center gap-4 ml-2">
            {siteConfig.navItems.map((item) => (
              <li key={item.href}>
                <a
                  className={clsx(
                    "text-foreground hover:text-accent transition-colors",
                    "data-[active=true]:text-accent data-[active=true]:font-medium",
                  )}
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <BookingButton />
            </li>
          </ul>
        </div>

        <div className="hidden sm:flex items-center gap-2">

          <ThemeSwitch />

        </div>

        <div className="flex sm:hidden items-center gap-2">

          <ThemeSwitch />
          <button
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
            className="p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  d="M6 18L18 6M6 6l12 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              ) : (
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              )}
            </svg>
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="border-t border-separator sm:hidden">

          <ul className="flex flex-col gap-2 px-4 pb-4">
            {siteConfig.navMenuItems.map((item, index) => (
              <li key={`${item.label}-${index}`}>
                <Link
                  className={clsx(
                    "block py-2 text-lg no-underline",
                  )}
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};
