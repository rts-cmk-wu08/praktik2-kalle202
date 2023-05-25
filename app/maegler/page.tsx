import { AgentType } from "@/types/agenttype";
import AgentCard from "../components/cards/AgentCard";
import Link from "next/link";
import Banner from "../components/banners/Banner";

async function getAgents() {
  const res = await fetch("https://dinmaegler.onrender.com/agents");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function page() {
  const agent = await getAgents();
  return (
    <>
      <Banner text={"Alle mæglere"} />
      <div className="grid bg-gray-100 grid-cols-6 py-16">
        <div className="grid grid-cols-3 col-span-4 col-start-2 justify-self-center gap-8 py-8">
          {agent.map((agent: AgentType) => (
            <AgentCard
              {...agent}
              key={agent.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}
