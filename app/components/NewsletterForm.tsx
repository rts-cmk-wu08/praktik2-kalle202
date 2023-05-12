import { FaArrowRight } from "react-icons/fa";

export default function NewsletterForm() {
  return (
    <form action="">
      <div className="bg-white flex justify-between items-center py-4">
        <input
          type="text"
          placeholder="Indtast din email adresse"
          className="w-full mx-3"
        />
        <button type="submit">
          <FaArrowRight className="mx-3" />
        </button>
      </div>
    </form>
  );
}
