import { HomeType } from "@/types/hometype";
import BoligCard from "./BoligCard";

async function getHomes() {
  const res = await fetch("https://dinmaegler.onrender.com/homes");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function UdvalgteBoliger() {
  const homes = await getHomes();
  console.log(homes[0]);
  return (
    <div className="grid bg-gray-100 grid-cols-6 pt-16">
      <h2 className="col-span-full justify-self-center text-4xl font-bold text-[#263048] py-4">
        Udvalgte Boliger
      </h2>
      <p className="col-span-full justify-self-center text-center py-4">
        There are many variations of passages of Lorem Ipsum available but the
        this in <br></br> majority have suffered alteration in some
      </p>
      <div className="grid grid-cols-2 col-span-4 col-start-2 justify-self-center gap-8 py-8">
        {homes.slice(0, 4).map((home: HomeType) => (
          <BoligCard
            {...home}
            key={home.id}
          />
        ))}
      </div>
    </div>
  );
}
