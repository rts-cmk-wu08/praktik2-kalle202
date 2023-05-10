"use client";

import { HomeType } from "@/types/hometype";
import { useState, useEffect } from "react";

export default function BgColor({ energylabel }: HomeType) {
  const [color, setColor] = useState("");
  console.log(energylabel);

  useEffect(() => {
    if (energylabel === "A") {
      setColor("green");
    } else if (energylabel === "B") {
      setColor("green");
    } else if (energylabel === "C") {
      setColor("green");
    } else {
      setColor("#EB5757");
    }
  }, [energylabel]);
  return <div className={`bg-${color}`}>{energylabel}</div>;
}
