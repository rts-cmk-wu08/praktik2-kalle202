import Image from "next/image";
import Link from "next/link";
import logo from "/public/images/logo.png";

export default function Nav() {
  return (
    <nav className="h-24 grid grid-cols-6">
      <Link
        href="/"
        className="col-start-2 flex items-center"
      >
        <Image
          src={logo}
          alt="din mægler logo"
        />
      </Link>
      <ul className="col-start-4 col-end-6 flex justify-between items-center">
        <li>
          <Link href="">Boliger til salg</Link>
        </li>
        <li>
          <Link href="">Mæglere</Link>
        </li>
        <li>
          <Link href="">Mine favoritter</Link>
        </li>
        <li>
          <Link href="">Kontakt os</Link>
        </li>
      </ul>
    </nav>
  );
}

/* <div className="bg-[#162A41] text-white grid grid-cols-2 h-14 text-lg justify-items-center">
      <div className="grid grid-cols-2 gap-8">
        <Link
          href="mailto:4000@dinmaegler.com"
          className="flex items-center"
        >
          <FaPaperPlane className="m-2" />
          4000@dinmaegler.com
        </Link>
        <Link
          href="tel:+4570704000"
          className="flex items-center"
        >
          <FaPhone className="m-2" />
          +45 7070 4000
        </Link>
      </div>
      <Link
        href="/login"
        className="flex items-center"
      >
        <FaUser className="m-2" />
        Log ind
      </Link>
    </div> */
