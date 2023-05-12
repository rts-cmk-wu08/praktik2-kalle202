import Image from "next/image";
import { AgentType } from "@/types/agenttype";
import { HiMail } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

export default function BoligCard({
  name,
  title,
  phone,
  email,
  image,
  id,
}: AgentType) {
  return (
    <div className="bg-white">
      <Image
        className="object-cover h-auto w-96"
        src={image.url}
        alt={name}
        width={200}
        height={200}
      />
      <div className="p-5 flex flex-col gap-y-2 text-center">
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-sm text-gray-400">{title}</p>
        <div className="flex justify-center gap-2">
          <Link href={`mailto:${email}`}>
            <HiMail />
          </Link>
          <Link href="https://dk.linkedin.com/">
            <FaLinkedinIn />
          </Link>
        </div>
      </div>
    </div>
  );
}
