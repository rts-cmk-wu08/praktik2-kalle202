import Banner from "@/app/components/banners/Banner";
import { SearchParamsType } from "@/types/SearchParamsTypes";
import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaLinkedinIn,
  FaPaperPlane,
  FaPhone,
  FaSearch,
  FaSkype,
} from "react-icons/fa";
import FavoriteAgentButton from "@/app/components/FavoriteAgentButton";

async function getAgentData(id: SearchParamsType) {
  const res = await fetch(`https://dinmaegler.onrender.com/agents/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function page({ params: { id } }: SearchParamsType) {
  const agent = await getAgentData(id);
  return (
    <>
      <Banner text="Kontakt en medarbejder" />
      <article className="grid grid-cols-6 my-28">
        <section className="col-start-2 col-span-2 col-end-5 mr-8">
          <div className="grid grid-cols-2 p-8 border-2">
            <div className="grid grid-cols-1">
              <Image
                src={agent.image.url}
                height={300}
                width={300}
                alt={agent.name}
                className="col-span-full row-span-full"
              />
              <div className="mt-16 self-center bg-[#162A41] flex col-span-full row-span-full text-2xl h-8 w-24 items-center justify-around">
                <FaInstagram className="fill-white" />
                <FaLinkedinIn className="fill-white" />
                <FaSkype className="fill-white" />
              </div>
            </div>
            <div className="flex text-lg flex-col gap-y-5 ml-8">
              <div className="border-b-2 pb-4">
                <div className="flex justify-between">
                  <h1 className="font-bold text-2xl">{agent.name}</h1>
                  <FavoriteAgentButton />
                </div>
                <h2 className="text-gray-400">{agent.title}</h2>
              </div>
              <div className="flex flex-col gap-y-3">
                <Link
                  className="flex items-center"
                  href={`tel:${agent.phone}`}
                >
                  <FaPhone className="transform -scale-x-100 mr-4 w-6 h-6" />
                  {agent.phone}
                </Link>
                <Link
                  className="flex items-center"
                  href={`mailto:${agent.email}`}
                >
                  <FaPaperPlane className="mr-4 w-6 h-6" />
                  {agent.email}
                </Link>
              </div>
            </div>
            <div className="col-span-full flex flex-col gap-y-3">
              <h2 className="text-2xl pt-6 font-bold">Om {agent.name}</h2>
              <div className="border-b-4 border-blue-900 w-20"></div>
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A odio
                quisquam error corrupti ullam temporibus, incidunt officia ipsam
                fugiat excepturi nam dolorum aliquam dolor qui modi beatae vitae
                quo quaerat. Lorem ipsum dolor sit amet consectetur, adipisicing
                elit.
              </p>
              <p className="text-lg">
                Officia maxime corrupti tempore eaque dolorum, sunt praesentium
                harum provident necessitatibus quae, animi magnam est error quis
                doloremque quisquam ducimus culpa repellendus?
              </p>
              <div className="flex flex-col gap-y-3 p-8 border-2">
                <h2 className="text-2xl pt-6 font-bold">
                  Kontakt {agent.name}
                </h2>
                <div className="border-b-4 border-blue-900 w-20"></div>
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
                  <button
                    type="submit"
                    className="justify-self-start text-white bg-[#162A41] py-4 px-8"
                  >
                    Send besked
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <div className="col-start-5 col-span-1 flex flex-col gap-y-4">
          <div className="bg-blue-100 p-6 flex flex-col gap-y-6">
            <h3 className="text-2xl border-b-2 pb-4 border-gray-300">
              Search property
            </h3>
            <div className="bg-white flex p-3 items-center justify-start">
              <FaSearch className="fill-gray-500 mr-3" />
              <input
                type="text"
                placeholder="search"
                className="w-full text-lg"
              ></input>
            </div>
          </div>

          <div className="bg-[#162A41] text-white py-16 text-center flex flex-col justify-center gap-y-3">
            <h3 className="text-2xl">
              Find The Best<br></br> Property <br></br> For Rent Or Buy
            </h3>
            <div className="border-b-2 w-14 self-center"></div>
            <p>Call Us Now</p>
            <Link
              href="tel:+00123456789"
              className="text-2xl"
            >
              +00 123 456 789
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
