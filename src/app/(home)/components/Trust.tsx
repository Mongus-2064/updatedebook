import Maxwidthwrapper from "@/Components/Maxwidthwrapper";
import React from "react";

export default function Trust() {
  return (
    <div className="lg:mt-12">
      <Maxwidthwrapper>
        <div className="grid  md:grid-cols-3 place-items-center bg-slate-100 px-2 py-3 rounded-md md:gap-0  gap-6">
          <div>
            <p className="text-4xl font-bold text-center">10K+</p>
            <p className="text-gray-400">Books Available</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-center">5K+</p>
            <p className="text-gray-400">Happy Readers</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-center">50+</p>
            <p className="text-gray-400">Categories</p>
          </div>
        </div>
      </Maxwidthwrapper>
    </div>
  );
}
