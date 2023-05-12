"use client";

import { HomeType } from "@/types/hometype";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Slider({ images, adress1, id }: HomeType) {
  return (
    <motion.div className="cursor-grab overflow-hidden col-span-full">
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -2720 }}
        className="flex w-full"
      >
        {images.map((image) => (
          <motion.div className="px-4">
            <Image
              src={image.url}
              alt={adress1}
              key={id}
              width={800}
              height={800}
              className="min-w-[1024px] h-[640px] pointer-events-none"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
