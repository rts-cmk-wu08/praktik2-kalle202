import AgentCard from "./cards/AgentCard";
import Link from "next/link";
import { AgentType } from "@/types/agenttype";

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

export default async function UdvalgteBoliger() {
  const agents = await getAgents();
  return (
    <div className="grid bg-gray-100 grid-cols-6 py-16">
      <h2 className="col-span-full justify-self-center text-4xl font-bold text-[#263048] py-4">
        Mød vores engagerede medarbejdere
      </h2>
      <p className="col-span-full justify-self-center text-center py-4">
        Din Mægler er garant for altid veluddannet assistance i dit boligsalg.
        <br></br>
        Kontakt en af vores medarbejdere.
      </p>
      <div className="grid grid-cols-3 col-span-4 col-start-2 justify-self-center gap-8 py-8">
        {agents.slice(0, 3).map((agent: AgentType) => (
          <AgentCard
            {...agent}
            key={agent.id}
          />
        ))}
      </div>
      <Link
        className="col-span-full justify-self-center text-center bg-[#162A41] text-white py-4 px-6 rounded"
        href="/maegler"
      >
        Se alle mæglere
      </Link>
    </div>
  );
}
