"use client";

import * as React from "react";
import Slider from "@/app/components/Slider";
import { SearchParamsType } from "@/types/SearchParamsTypes";
import Image from "next/image";
import formatPrice from "@/util/formatPrice";
import imageicon from "public/icons/homedetails/imageicon.svg";
import stackicon from "public/icons/homedetails/stackicon.svg";
import pinicon from "public/icons/homedetails/pinicon.svg";
import hearticon from "public/icons/homedetails/hearticon.svg";
import DesignatedAgent from "@/app/components/cards/DesignatedAgent";

async function getHomeData(id: SearchParamsType) {
  const res = await fetch(`https://dinmaegler.onrender.com/homes/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function page({ params: { id } }: SearchParamsType) {
  const home = await getHomeData(id);
  return (
    <article className="grid grid-cols-6">
      <Slider
        {...home}
        key={home.id}
      />
      <section className="col-span-4 col-start-2 flex justify-between py-10 border-b-2">
        <h1 className="font-bold text-lg">
          {home.adress1}
          <br></br>
          {home.postalcode} {home.city}
        </h1>
        <div className="flex gap-x-10">
          <Image
            src={imageicon}
            alt="imageicon"
          />
          <Image
            src={stackicon}
            alt="stackicon"
          />
          <Image
            src={pinicon}
            alt="pinicon"
          />
          <Image
            src={hearticon}
            alt="hearticon"
          />
        </div>
        <p className="font-bold text-2xl">{formatPrice(home.price)}</p>
      </section>
      <section className="grid grid-cols-3 col-span-4 col-start-2 items-start text-sm py-10">
        <table>
          <tr>
            <td>Sagsnummer:</td>
            <td>{home.id}</td>
          </tr>
          <tr>
            <td>Boligareal:</td>
            <td>{home.livingspace}m&sup2;</td>
          </tr>
          {home.lotsize > 0 ? (
            <tr>
              <td>Grundareal:</td>
              <td>{home.lotsize}m&sup2;</td>
            </tr>
          ) : null}
          <tr>
            <td>Rum/værelser</td>
            <td>{home.rooms}</td>
          </tr>
          <tr>
            <td>Antal Plan:</td>
            <td>{home.floorplan.size}</td>
          </tr>
        </table>
        <table className="">
          {home.basementsize > 0 ? (
            <tr>
              <td>Kælder:</td>
              <td>{home.basementsize}m&sup2;</td>
            </tr>
          ) : (
            <tr>
              <td>Kælder:</td>
              <td>-</td>
            </tr>
          )}
          <tr>
            <td>Byggeår:</td>
            <td>{home.built}</td>
          </tr>
          {home.remodel ? (
            <tr>
              <td>Ombygget:</td>
              <td>{home.remodel}</td>
            </tr>
          ) : null}
          <tr>
            <td>Energimærke</td>
            <td>{home.energylabel}</td>
          </tr>
        </table>
        <table>
          <tr>
            <td>Udbetaling</td>
            <td>{formatPrice(home.payment)}</td>
          </tr>
          <tr>
            <td>Brutto ex ejerudgift:</td>
            <td>{formatPrice(home.gross)}</td>
          </tr>
          <tr>
            <td>Brutto ex ejerudgift:</td>
            <td>{formatPrice(home.netto)}</td>
          </tr>
          <tr>
            <td>Ejerudgift:</td>
            <td>{formatPrice(home.cost)}</td>
          </tr>
        </table>
      </section>
      <section className="col-span-5 col-start-2 grid grid-cols-5 py-24">
        <div className="pr-12 col-span-2">
          <h2 className="font-bold text-xl pb-6">Beskrivelse</h2>
          <p>{home.description}</p>
        </div>
        <div className="col-span-3">
          <h2 className="font-bold text-xl pb-6 ">Ansvarlig mægler</h2>
          <DesignatedAgent
            {...home.agent}
            key={home.agent.id}
          />
        </div>
      </section>
    </article>
  );
}
