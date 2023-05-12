import Image from "next/image";
import landingBanner from "/public/images/landing-banner.png";
import SearchBanner from "./SearchBanner";

export default function HomeBanner() {
  return (
    <div className="grid grid-cols-1 justify-items-center items-center">
      <Image
        src={landingBanner}
        alt="homepage banner"
        className="row-span-full col-span-full w-full"
      />
      <div className="row-span-full col-span-full">
        <h1 className="text-white row-span-full col-span-full text-4xl font-bold">
          Søg efter din drømmebolig
        </h1>
        <SearchBanner />
      </div>
    </div>
  );
}
