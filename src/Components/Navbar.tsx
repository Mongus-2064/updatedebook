"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AlignLeft, Book } from "lucide-react";
import Link from "next/link";
import Maxwidthwrapper from "./Maxwidthwrapper";

export default function Navbar() {
  const [isopen, setIsOpen] = useState(false);

  return (
    <div className=" bg-slate-50 shadow-2xl">
      <Maxwidthwrapper>
        <nav className="flex justify-between p-4 backdrop-blur-3xl">
          <div className="flex items-center gap-0.5">
            <div>
              <Book className="text-blue-800 font-bold lg:w-14  lg:h-14 w-6 h-6 " />
            </div>
            <div>
              <p className="font-bold text-xl lg:text-3xl">BookHaven</p>
            </div>
          </div>
          <div onClick={() => setIsOpen(!isopen)} className=" lg:hidden  flex items-center">
            <AlignLeft />
          </div>
          <div className=" hidden lg:flex gap-4 items-center">
              <div className="hover:text-blue-800 hover:scale-105 duration-250 ">
                <Link className="font-semibold" href={"/login"}>
                  Sign In
                </Link>
              </div>

              <div className="hover:scale-105 transition-transform hover:text-blue-800 duration-300 ">
                <Link
                  className="bg-white p-2 rounded-md border font-semibold"
                  href={"/signup"}
                >
                  Sign Up
                </Link>
              </div>
            </div>
        </nav>
         {isopen ? (
            <div className="flex gap-4 items-center">
              <div className="hover:text-blue-800 hover:scale-105 duration-250 ">
                <Link className="font-semibold" href={"/login"}>
                  Sign In
                </Link>
              </div>

              <div className="hover:scale-105 transition-transform hover:text-blue-800 duration-300 ">
                <Link
                  className="bg-white p-2 rounded-md border font-semibold"
                  href={"/signup"}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          ) : (
            ""
          )}
      </Maxwidthwrapper>
    </div>
  );
}
