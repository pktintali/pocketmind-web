"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";

import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
import DownloadModal from "../Common/EmailModal";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [stickyMenu, setStickyMenu] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const pathUrl = usePathname();

  // Handle sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
    return () => {
      window.removeEventListener("scroll", handleStickyMenu);
    };
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  const toggleDropdown = (id: number) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  return (
    <header
      className={`fixed left-0 top-0 z-[9999] w-full transition-all duration-300 ease-in-out ${
        stickyMenu
          ? "bg-white/80 py-4 shadow-lg backdrop-blur-lg dark:bg-black/80"
          : "py-6"
      }`}
    >
      <div className="relative mx-auto max-w-c-1390 items-center justify-between px-4 md:px-8 xl:flex 2xl:px-0">
        {/* Logo Area */}
        <div className="flex w-full items-center justify-between xl:w-1/4">
          <Link href={"/"} className="block">
            <div className="flex items-center transition-transform hover:scale-105">
              <Image
                src="/images/logo/pocketmind_logo.png"
                alt="PocketMind Logo"
                width={38}
                height={38}
                className="rounded-lg shadow-sm"
                priority
              />
              <span className="ml-3 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-2xl font-bold text-transparent">
                PocketMind
              </span>
            </div>
          </Link>

          {/* Mobile Menu Toggler */}
          <button
            aria-label="Toggle Mobile Navigation"
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 xl:hidden"
            onClick={() => setNavigationOpen(!navigationOpen)}
          >
            <div className="flex h-5 w-6 flex-col items-center justify-between overflow-hidden">
              <span
                className={`h-0.5 w-full rounded-full bg-black transition-all duration-300 ease-in-out ${
                  navigationOpen ? "translate-y-[8px] rotate-45" : ""
                } dark:bg-white`}
              ></span>
              <span
                className={`h-0.5 w-full rounded-full bg-black transition-all duration-200 ease-in-out ${
                  navigationOpen ? "translate-x-2 opacity-0" : "opacity-100"
                } dark:bg-white`}
              ></span>
              <span
                className={`h-0.5 w-full rounded-full bg-black transition-all duration-300 ease-in-out ${
                  navigationOpen ? "translate-y-[-8px] -rotate-45" : ""
                } dark:bg-white`}
              ></span>
            </div>
          </button>
        </div>

        {/* Navigation Menu */}
        <div
          ref={navRef}
          className={`nav-menu-wrapper overflow-hidden transition-all duration-300 ease-in-out xl:visible xl:flex xl:h-auto xl:w-auto xl:items-center xl:overflow-visible xl:opacity-100
            ${
              navigationOpen
                ? "visible mt-4 max-h-[400px] rounded-xl bg-white opacity-100 shadow-lg dark:bg-gray-900"
                : "invisible max-h-0 opacity-0 xl:opacity-100"
            }
          `}
        >
          <nav className="w-full p-4 xl:p-0">
            <ul className="flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-8">
              {menuData.map((menuItem) => (
                <li
                  key={menuItem.id}
                  className={`group relative ${
                    menuItem.submenu ? "nav-item-has-children" : ""
                  }`}
                >
                  {menuItem.submenu ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(menuItem.id)}
                        className="flex w-full items-center justify-between text-base font-medium text-black group-hover:text-primary dark:text-white xl:pr-8"
                      >
                        {menuItem.title}
                        <span className="ml-2">
                          <svg
                            className={`h-3 w-3 transition-transform duration-300 ${
                              activeDropdown === menuItem.id ? "rotate-180" : ""
                            } group-hover:fill-primary`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                          </svg>
                        </span>
                      </button>

                      <div
                        className={`submenu-wrapper relative left-0 top-full z-50 mt-2 w-full rounded-lg bg-white p-4 transition-all duration-300 ease-in-out dark:bg-gray-800 xl:absolute xl:min-w-[200px] xl:shadow-lg ${
                          activeDropdown === menuItem.id
                            ? "block opacity-100"
                            : "hidden opacity-0"
                        }`}
                      >
                        <ul className="grid gap-2">
                          {menuItem.submenu.map((submenuItem) => (
                            <li
                              key={submenuItem.id}
                              className="nav-submenu-item"
                            >
                              <Link
                                href={submenuItem.path || "#"}
                                className="block rounded-md px-3 py-2 text-base text-black transition hover:bg-gray-100 hover:text-primary dark:text-white dark:hover:bg-gray-700"
                              >
                                {submenuItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={`${menuItem.path}`}
                      className={`flex h-full items-center py-2 text-base font-medium transition-colors duration-300 xl:py-0 ${
                        pathUrl === menuItem.path
                          ? "text-primary"
                          : "text-black hover:text-primary dark:text-white dark:hover:text-primary"
                      }`}
                    >
                      {menuItem.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="my-5 flex items-center justify-center gap-6 border-t pt-5 dark:border-gray-700 xl:my-0 xl:ml-8 xl:flex-row xl:border-t-0 xl:pt-0">
            <div className="flex items-center justify-center">
              <ThemeToggler />
            </div>

            <button
              onClick={() => setShowPopup(true)}
              className="flex h-10 items-center justify-center rounded-full bg-gradient-to-r from-primary to-blue-600 px-6 text-sm font-medium text-white transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/50 dark:focus:ring-blue-800"
            >
              <span className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download
              </span>
            </button>
          </div>
        </div>
        <DownloadModal visibility={showPopup} handleClose={handleClose} />
      </div>
    </header>
  );
};

export default Header;
