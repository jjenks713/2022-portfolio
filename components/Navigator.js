import React from "react";
import Head from 'next/head'
import Link from 'next/link'
import { Menu } from '@headlessui/react'
import { useState } from "react";


export default function Navigator() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
    <Head>
    </Head>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-zinc mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-center">
          <div className="w-full relative flex flex-wrap justify-center lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/"//eslint-disable-line
            > 
            <img //eslint-disable-line
              src="./images/logo.png" 
              className="hover:opacity-75 cursor-pointer"
            >
            </img>
            </Link>

            <button
              className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fa fa-angle-down"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex items-center flex-wrap" +
              (navbarOpen ? " flex" : " flex text-xs text-center")
            }
          >
            <ul className="flex flex-wrap list-none lg:ml-auto py-3 md:text-sm">

            <li className="nav-item">
                <Link href="/">
                <a
                onClick={handleToggle}
                className={isActive ?
                "px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-black hover:opacity-75"
                : 
                "px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white bg-gray-600 hover:opacity-75"
                }>
                  About
                </a>
                </Link>
            </li>

              <li className="nav-item">
                <Link href='/javascript'>
                <a
                className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-black hover:opacity-75"
                >
                  Javascript/jQuery
                </a></Link>

              </li>

              <li className="nav-item">
              <Link href="/react">
                <a
                className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-black hover:opacity-75"
                >
                  React/Vue
                </a>
                </Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
