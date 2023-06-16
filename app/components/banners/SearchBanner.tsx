export default function SearchBanner() {
  return (
    <div className="bg-white p-10 grid gap-4 mt-10">
      <div>
        <h2 className="font-bold text-xl mb-1">
          Søg blandt 158 boliger til salg i 74 butikker
        </h2>
        <div className="border-b-4 border-[#162A41] w-12 self-center"></div>
      </div>
      <div>
        <p className="mb-2">Hvad skal din næste bolig indeholde?</p>
        <form
          action=""
          className="flex justify-between gap-x-3
          "
        >
          <input
            type="text"
            placeholder="Søg på fx. glaskeramisk komfur, bryggers, kælder eller lignende"
            className="w-full px-4 border-2 rounded-md"
          />
          <button className="text-white py-4 px-3 bg-[#162A41] text-center rounded-md w-1/6">
            Søg
          </button>
        </form>
      </div>
    </div>
  );
}
