import Maxwidthwrapper from "@/Components/Maxwidthwrapper";
import React from "react";

export default function Featurebooks() {
  return (
    <div className="md:mt-16 mt-8 md:mb-14 mb-8">
      <Maxwidthwrapper>
        <p className="text-4xl font-bold text-center">Featured Books</p>
        <p className="text-center flex flex-col text-gray-600"  >
          Discover our curated collection of boks across various genres. From
          technology to ramoance.<span>find your next favorite read.</span>
        </p>
        <hr className="text-gray-200 mt-5"/>
      </Maxwidthwrapper>
      
    </div>
  );
}
