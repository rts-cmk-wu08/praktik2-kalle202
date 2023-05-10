import Image from "next/image";
import Testimonial from "/public/images/testimonials-image.png";
import handHouse from "/public/icons/testimonials/hand-house.svg";
import house from "/public/icons/testimonials/house.svg";
import handCity from "/public/icons/testimonials/hand-city.svg";
import handCustomer from "/public/icons/testimonials/hand-customer.svg";
import pin from "/public/icons/testimonials/pin.svg";

export default function Testimonials() {
  return (
    <div className="grid grid-cols-6 my-24">
      <div className="col-span-4 col-start-2 grid grid-cols-2 gap-12 pb-16">
        <div className="">
          <Image
            src={Testimonial}
            alt="picture of family"
          />
        </div>
        <div className="">
          <h2 className="text-3xl font-bold mb-6">
            Vi har fulgt danskerne hjem i snart 4 årtier
          </h2>
          <div className="grid grid-cols-1 gap-y-4 text-sm">
            <h3 className="text-xl font-bold">
              Det synes vi siger noget om os!
            </h3>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has normal distribution.
            </p>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <div className="grid grid-cols-2 mt-8">
              <div className="flex items-center gap-4">
                <div className="bg-[#EEF7FF] p-2">
                  <Image
                    src={handHouse}
                    alt="hand house icon"
                  />
                </div>
                <p className="font-bold text-lg">
                  4829
                  <span className="block font-normal text-sm">
                    boliger solgt
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-[#EEF7FF] p-2">
                  <Image
                    src={house}
                    className="bg-[#EEF7FF]"
                    alt="house icon"
                  />
                </div>
                <p className="font-bold text-lg">
                  158
                  <span className="block font-normal text-sm">
                    boliger til salg
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row-start-2 col-span-4 col-start-2 col-end-6 grid grid-cols-3 pt-16 border-t-2">
        <div className="flex items-start gap-x-4">
          <div className="bg-[#EEF7FF] p-2">
            <Image
              src={handCity}
              alt="icon of hand holding city"
              className="w-20"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <h3 className="text-lg font-bold">Bestil et salgstjek</h3>
            <p>
              Med et Din Mægler Salgstjek bliver du opdateret på værdien af din
              bolig.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-4">
          <div className="bg-[#EEF7FF] p-2">
            <Image
              src={pin}
              alt="icon of hand holding city"
              className="w-14"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <h3 className="text-lg font-bold">74 Butikker</h3>
            <p>
              Hos Din Mægler er din bolig til salg i alle vores 74 butikker, som
              er fordelt rundt om i Danmark.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-x-4">
          <div className="bg-[#EEF7FF] p-2">
            <Image
              src={handCustomer}
              alt="icon of hand holding city"
              className="w-24"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <h3 className="text-lg font-bold">Tilmeld køberkartotek</h3>
            <p>
              Når du er tilmeldt vores køberkartotek, bliver du kontaktet inden
              en ny bolig bliver annonceret.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
