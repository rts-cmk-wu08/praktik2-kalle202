import Link from "next/link";
import Banner from "../components/banners/Banner";
import { FaMapMarkerAlt, FaPaperPlane, FaPhone } from "react-icons/fa";

export default function page() {
  return (
    <>
      <Banner text="Kontakt os" />
      <section className="grid grid-cols-6 my-20">
        <div className="col-start-2 col-span-4 flex flex-col gap-y-4 mb-8">
          <h2 className="text-2xl pt-6 font-bold">
            Vi sidder klar til at besvare dine spørgsmål
          </h2>
          <div className="border-b-4 border-blue-900 w-20"></div>
          <p className="w-3/5">
            Der kan opstå tvivl om mange ting nå man gerne vil, eller er i gang
            med at sælge sin bolig. Vores medarbejdere sider klar alle ugens
            dage til at svare på dine spørgsmål.
          </p>
        </div>
        <div className="col-start-2 col-span-4 grid grid-cols-5 gap-x-8">
          <div className="col-span-3 flex flex-col gap-y-3 p-8 border-2">
            <form
              action="submit"
              className="grid grid-cols-2 gap-7 pt-4"
            >
              <div className="col-span-1 flex flex-col">
                <label className="text-xl pb-3">Navn</label>
                <input
                  type="text"
                  placeholder="Indtast navn"
                  className="p-4 border-2"
                ></input>
              </div>
              <div className="col-span-1 flex flex-col">
                <label className="text-xl pb-3">Email</label>
                <input
                  type="text"
                  placeholder="Indtast email"
                  className="p-4 border-2"
                ></input>
              </div>
              <div className="col-span-2 flex flex-col">
                <label className="text-xl pb-3">Emne</label>
                <input
                  type="text"
                  placeholder="Hvad drejer din henvendelse om?"
                  className="p-4 border-2"
                ></input>
              </div>
              <div className="col-span-2 flex flex-col">
                <label className="text-xl pb-3">Besked</label>
                <textarea
                  placeholder="Skriv din besked her..."
                  className="p-4 border-2 pb-20"
                ></textarea>
              </div>
              <div className="col-span-full flex justify-start items-center">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="w-6 h-6 mr-4"
                />
                <p>Ja tak, jeg vil gerne modtage Din Mæglers nyhedsbrev.</p>
              </div>
              <button
                type="submit"
                className="text-white bg-[#162A41] py-4 px-8 col-span-full justify-self-start"
              >
                Send besked
              </button>
            </form>
          </div>
          <div className="col-span-2">
            <div className="border-2 w-full py-14 flex flex-col gap-y-8 h-full">
              <Link
                href="tel:+457070400"
                className="flex flex-col justify-center items-center text-lg gap-y-2"
              >
                <div className="rounded-full bg-[#162A41] p-4">
                  <FaPhone className="fill-white transform -scale-x-100 w-6 h-6" />
                </div>
                <p className="font-bold">Ring til os</p>
                <p>+45 7070 4000</p>
              </Link>
              <div className="border-b-2 w-5/6 self-center"></div>
              <Link
                href="mailto:4000@dinmaegler.dk"
                className="flex flex-col justify-center items-center text-lg gap-y-2"
              >
                <div className="rounded-full bg-[#162A41] p-4">
                  <FaPaperPlane className="fill-white w-6 h-6" />
                </div>
                <p className="font-bold">Send en mail</p>
                <p>4000@dinmaegler.dk</p>
              </Link>
              <div className="border-b-2 w-5/6 self-center"></div>
              <Link
                href="https://www.google.dk/maps"
                className="flex flex-col justify-center items-center text-lg gap-y-2"
              >
                <div className="rounded-full bg-[#162A41] p-4">
                  <FaMapMarkerAlt className="fill-white w-6 h-6" />
                </div>
                <p className="font-bold">Besøg butikken</p>
                <p className="text-center">
                  Stændertorvet 78, <span className="block">4000 Roskilde</span>
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
