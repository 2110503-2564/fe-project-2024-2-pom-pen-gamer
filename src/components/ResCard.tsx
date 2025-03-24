"use client";

import InteractiveCardforRes from "./InteractiveCardForRestaurant";
import Image from "next/image";
import { Rating } from "@mui/material";
import { useState } from "react";

export default function ResCard({
  ResName,
  imgSrc,
}: {
  ResName: string;
  imgSrc: string;
}) {
  return (
    <InteractiveCardforRes contentName={ResName}>
      <div className="w-full h-[70%] relative rounded-lg shadow-lg">
        <Image
          src={imgSrc}
          alt="Package Picture"
          fill={true}
          className="object-cover rounded-lg"
        />
      </div>
      <div className="w-full h-[15%] p-[10p] font-bold text-blue-900 text-center">
        {" "}
        {ResName}
      </div>
      <div>
        <div className="flex items-center justify-center my-0">
          <div className="text-blue-800 mx-1"></div>
        </div>
      </div>
    </InteractiveCardforRes>
  );
}
