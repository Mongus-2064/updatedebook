import React from "react";
import Maxwidthwrapper from "./Maxwidthwrapper";
import { ArrowRight,  Sparkles,  } from "lucide-react";
import Link from "next/link";

export default function Herosection() {
  return (
    <div className="lg:mt-14 mt-4 md:px-4 px-4 flex justify-center">
      <Maxwidthwrapper>
        <div className="flex flex-col justify-center items-center">
          <div className="bg-blue-100 py-2 px-6 rounded-full max-w-fit  ">
            <p className="text-blue-900 font-semibold flex gap-3 items-center justify-center">
              <Sparkles className="w-4 h-5" /> Discover Your Next Great Read
            </p>
          </div>
          <div className="mt-6">
            <p className="flex flex-col items-center gap-1 font-semibold text-5xl text-center">
              Welcome to Your
              <span className="text-blue-900">Digital Library</span>
            </p>
          </div>
          <div className="flex mt-6 flex-col items-center">
            <p className="flex flex-col items-center text-xl text-gray-600 lg:tracking-wider font-thin text-start">
              Explore thousands of books, save your favorites, and discover new
              world<span>
                Sign up today to build your personal reading collection.
              </span>
            </p>
           <Link 
           className="flex mt-6 bg-blue-800 gap-3 text-white px-8 py-3  items-center font-semibold rounded-md"
           href={"/collections"}>Browse Books <ArrowRight size={14}/></Link>
          </div>
        </div>
      </Maxwidthwrapper>
    </div>
  );
}
