import Maxwidthwrapper from "@/Components/Maxwidthwrapper";
import { Books } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Bookcard({ books }: { books: Books }) {
  return (
    <div className="mt-4">
      <Maxwidthwrapper>
        <div className="rounded-md p-4 bg-slate-50 shadow-2xl border border-gray-200 hover:scale-105 transition-transform">
            <div className="flex  justify-center">
          <Image
            src={books.imageLink}
            alt={books.title}
            width={128}
            height={124}
            className="object-cover"
          />
        </div>
        <hr className="text-gray-200 mt-4"/>
        <div className="flex flex-col gap-3">
          <p className="text-blue-500 font-semibold">{books.title}</p>
          <p className="text-gray-600">by {books.author}</p>
          <p className="text-gray-600">{books.description}</p>
          <Link
          className="bg-blue-500 text-center px-6 py-3 text-white rounded-md hover:scale-105 transition-transform"
          href={"/books"}>View Details</Link>
        </div>
        </div>
        
      </Maxwidthwrapper>
    </div>
  );
}
