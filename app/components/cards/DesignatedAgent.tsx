import { AgentType } from "@/types/agenttype";
import Image from "next/image";
import {
  FaInstagram,
  FaLinkedinIn,
  FaPaperPlane,
  FaPhone,
  FaSkype,
} from "react-icons/fa";

export default function DesignatedAgent({
  name,
  title,
  phone,
  email,
  image,
  id,
}: AgentType) {
  return (
    <section className="flex p-8 border-2 max-w-2xl gap-8">
      <div className="grid grid-cols-1">
        <Image
          src={image.url}
          height={300}
          width={300}
          alt={name}
          className="col-span-full row-span-full"
        />
        <div className="mt-16 self-center bg-[#162A41] flex col-span-full row-span-full text-2xl h-8 w-24 items-center justify-around">
          <FaInstagram className="fill-white" />
          <FaLinkedinIn className="fill-white" />
          <FaSkype className="fill-white" />
        </div>
      </div>
      <div className="flex text-lg flex-col gap-y-5">
        <div className="border-b-2 pb-4">
          <h3 className="font-bold text-xl">{name}</h3>
          <p className="text-md text-gray-400">{title}</p>
        </div>
        <div>
          <p className="flex items-center">
            <FaPhone className="mr-2" />
            {phone}
          </p>
          <p className="flex items-center">
            <FaPaperPlane className="mr-2" />
            {email}
          </p>
        </div>
      </div>
    </section>
  );
}
