import { FaPaperPlane, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";
import logo from "/public/images/logo.png";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="grid grid-cols-6 bg-[#F8F8FB]">
        <div className="col-start-2 col-span-3 py-10">
          <Image
            src={logo}
            alt="logo"
            className="py-4"
          />
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words.
          </p>
        </div>
        <div className="col-start-2 col-span-3 flex gap-x-24">
          <div className="grid gap-y-6 bg-white shadow-lg p-10 z-10">
            <div className="flex items-center gap-4">
              <div className="bg-[#162A41] w-14 h-14 flex items-center justify-center rounded-full">
                <FaPhone className="fill-white w-6 h-6 transform -scale-x-100" />
              </div>
              <div>
                <p className="text-gray-400 text-xs">Ring til os</p>
                <Link
                  className="font-bold text-lg"
                  href="tel:+4570704000"
                >
                  +45 7070 4000
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-[#162A41] w-14 h-14 flex items-center justify-center rounded-full">
                <FaPaperPlane className="fill-white w-6 h-6" />
              </div>
              <div>
                <p className="text-gray-400 text-xs">Send en mail</p>
                <Link
                  className="font-bold text-lg"
                  href="mailto:4000@dinmaegler.com"
                  target="_blank"
                >
                  4000@dinmaegler.com
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-[#162A41] w-14 h-14 flex items-center justify-center rounded-full">
                <FaMapMarkerAlt className="fill-white w-6 h-6" />
              </div>
              <div>
                <p className="text-gray-400 text-xs">Butik</p>
                <Link
                  className="font-bold text-lg"
                  href="https://www.google.dk/maps"
                  target="_blank"
                >
                  Stændertorvet 78, 4000 Roskilde
                </Link>
              </div>
            </div>
            <p>
              Din Mægler Roskilde, er din<br></br>boligibutik i lokalområdet.
            </p>
          </div>
          <nav className="">
            <h5 className="text-2xl font-bold py-4">Quick Links</h5>
            <ul className="flex flex-col gap-y-2">
              <li>
                <Link href="">Boliger til salg</Link>
              </li>
              <li>
                <Link href="">Mæglere</Link>
              </li>
              <li>
                <Link href="">Kontakt os</Link>
              </li>
              <li>
                <Link href="">Log ind / bliv bruger</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="grid grid-cols-6 relative -top-20 pt-20 bg-white">
        <div className="col-span-3 col-start-4 text-gray-500">
          <p>Medlem af</p>
          <p className="text-4xl font-bold">DMS</p>
          <p className="text-lg">Dansk Mægler Sammenslutning</p>
        </div>
      </div>
      <div className="col-span-full flex justify-center  bg-[#162A41] text-white h-16 items-center top-full">
        <p>Layout By Jit Banik 2020</p>
      </div>
    </>
  );
}
