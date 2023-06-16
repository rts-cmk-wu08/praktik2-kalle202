import { FaPaperPlane, FaPhone, FaUser } from "react-icons/fa";
import Link from "next/link";
import { signIn, signOut } from "next-auth/react";

export default function HeaderBanner() {
  return (
    <div className="bg-[#162A41] text-white grid grid-cols-6 h-14 text-md">
      <div className="col-start-2 col-end-4 flex gap-6">
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
      <div className="col-start-5 justify-self-end items-center flex">
        {/*   <>
          <p></p>
          <button
            onClick={() => signOut()}
            className="flex items-center"
          >
            <FaUser className="m-2" />
            Log ud
          </button>
        </> */}

        <button
          onClick={() => signIn("google")}
          className="flex items-center"
        >
          <FaUser className="m-2" />
          Log ind
        </button>
      </div>
    </div>
  );
}
