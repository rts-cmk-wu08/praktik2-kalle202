"use client";

import Link from "next/link";
import { AiOutlineHeart } from "react-icons/ai";
import { useEffect, useState } from "react";

export default function FavoriteAgentButton() {
  return (
    <Link
      href={"/link"}
      className="bg-blue-100 p-2 rounded-full"
    >
      <AiOutlineHeart className="w-6 h-6" />
    </Link>
  );
}
