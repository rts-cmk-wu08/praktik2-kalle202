import Image from "next/image";
import newsletterBanner from "/public/images/newsletter-banner.png";
import NewsletterForm from "../NewsletterForm";

export default function NewsletterBanner() {
  return (
    <div className="grid grid-cols-6">
      <Image
        src={newsletterBanner}
        className="bg-[#162A41] bg-opacity-90 col-span-full justify-self-center w-full row-span-full"
        alt="Newsletter Banner"
      />
      <div className="row-span-full col-span-full w-full col-start-2 col-end-6 grid grid-cols-2 items-center">
        <h4 className="text-white font-bold text-2xl">
          Tilmed dig til vores nyhedsbrev og hold dig opdateret på boligmarket
        </h4>
        <NewsletterForm />
      </div>
    </div>
  );
}
