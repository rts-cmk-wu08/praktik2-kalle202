import Image from "next/image";
import salebanner from "/public/images/tilsalg-banner.png";

export default function Banner() {
  return (
    <div className="grid grid-cols-6">
      <div className="row-span-full col-span-full w-full col-start-2 col-end-6 flex justify-center items-center order-3">
        <h4 className="text-white font-bold text-4xl">Boliger til salg</h4>
      </div>
      <div className="bg-[#162A41] bg-opacity-90 col-span-full justify-self-center w-full row-span-full order-2"></div>
      <Image
        src={salebanner}
        className=" col-span-full justify-self-center w-full row-span-full"
        alt="Newsletter Banner"
      />
    </div>
  );
}
