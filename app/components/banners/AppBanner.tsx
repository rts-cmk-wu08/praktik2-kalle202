import { FaApple, FaGooglePlay } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import phone from "/public/images/phone.png";

export default function AppBanner() {
  return (
    <div className="bg-[#162A41] w-full grid grid-cols-6 text-white pt-16">
      <div className="col-start-2 col-span-3 row-span-full w-3/4 flex flex-col gap-y-4 justify-center">
        <h4 className="font-bold text-4xl">
          Hold dig opdateret <br></br> på salgsprocessen
        </h4>
        <p className="text-lg">
          Når du sælger din bolig hos Din Mægler, kommunikerer du nemt med den
          ansvarlige mægler eller butik med vores app. Her kan du også se
          statistik på interessen for din bolig i alle vores salgskanaler.
        </p>
        <div className="flex gap-3">
          <Link
            className="flex border-2 p-3 items-center gap-2 hover:bg-white hover:text-[#162A41]"
            href="https://play.google.com/store/apps"
          >
            <FaGooglePlay />
            Google Play
          </Link>
          <Link
            className="flex border-2 p-3 items-center gap-2 hover:bg-white hover:text-[#162A41]"
            href="https://www.apple.com/app-store/"
          >
            <FaApple />
            Apple Store
          </Link>
        </div>
      </div>
      <div className="col-start-4 col-span-2 flex m-w-[425px] justify-end row-span-full">
        <Image
          className="w-3/4"
          src={phone}
          width={500}
          height={500}
          alt="phone"
        />
      </div>
    </div>
  );
}
