"use client";
import Link from "next/link";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <>
      <nav className=" text-gray-300 p-4">
        <div className="container backdrop-blur-sm bg-[rgba(255,255,255,.35)] p-3 rounded-full mx-auto flex justify-between items-center">
          <Link href="/" className="ml-3 text-white">
            MyWebsite
          </Link>

          <ul className="flex gap-4 mr-3">
            <li>
              <Link href="/" className="text-white hover:text-blue-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-white hover:text-blue-400 ">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-white hover:text-blue-400">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-white hover:text-blue-400">
                Contact
              </Link>
            </li>
            {session ? (
              <li>
                <Link href="/dashboard" className="text-white hover:text-blue-400">
                  <DropdownMenu>
                    <DropdownMenuTrigger>Dashboard</DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Profile</DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => {
                          signOut();
                        }}
                      >
                        Logout
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </Link>
              </li>
            ) : (
              <li>
                <Link href="/login" className="text-white hover:text-blue-400">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
