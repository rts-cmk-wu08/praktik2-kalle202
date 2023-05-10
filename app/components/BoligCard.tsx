import { HomeType } from "@/types/hometype";
import Image from "next/image";
import BgColor from "./bgColor";

export default function BoligCard({
  adress1,
  type,
  images,
  price,
  city,
  postalcode,
  payment,
  rooms,
  livingspace,
  id,
  energylabel,
}: HomeType) {
  return (
    <div className="bg-white">
      <Image
        className="object-cover h-48 w-96"
        src={images[0].url}
        alt={adress1}
        width={300}
        height={300}
      />
      <div className="p-5 flex flex-col gap-y-2">
        <h3 className="font-bold text-lg">{adress1}</h3>
        <p className="text-sm">
          {postalcode} {city}
        </p>
        <p className="font-bold text-lg">
          {type} &#x2022;
          <span className="font-normal text-sm">
            {" "}
            Ejerudgift: {payment} kr.
          </span>
        </p>
        <div className="flex justify-between border-t-2 pt-2 items-center">
          <p>
            <BgColor energylabel={energylabel} /> {rooms} &#x2022; {livingspace}{" "}
            m&sup2;
          </p>
          <p className="font-bold">Kr. {price}</p>
        </div>
      </div>
    </div>
  );
}
