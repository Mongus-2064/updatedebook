"use client";

import React from "react";
import Image from "next/image";
import { Book } from "lucide-react";
import Link from "next/link";
import Maxwidthwrapper from "./Maxwidthwrapper";

export default function Navbar() {
  return (
    <div>
        <Maxwidthwrapper>
      <nav className="flex justify-between">
        <div className="flex items-center">
          <div>
            <Book className="text-blue-800 font-bold " size={48} />
          </div>
          <div>
            <p className="font-bold text-3xl">BookHaven</p>
          </div>
        </div>

        <div className="flex gap-2">
            <div>
                <Link href={"/login"}>SignIn</Link>
            </div>
            <div>
                <Link href={"/signup"}>SignUp</Link>
            </div>
        </div>
      </nav>
      </Maxwidthwrapper>
    </div>
  );
}
