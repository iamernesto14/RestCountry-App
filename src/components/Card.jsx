// import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Card({ flags, name, population, region, subregion }) {
  return (
    <>
      <Link to={`/${name.common}`}>
        <article className="bg-white hover:bg-gray-50 rounded-lg transition-all duration-200 shadow overflow-hidden">
          <img src={flags.svg} alt={flags.alt} className="md:h-40 w-full object-cover" />
          <div className="px-4 py-7">
            <h2 className="text-lg text-black mb-4 font-bold">{name.common}</h2>
            <ul className="flex flex-col items-start justify-start gap-1">
              <li>
                <span className="font-bold">Population:</span>{" "}
                {population.toLocaleString()}
              </li>
              <li>
                <span className="font-bold">Region:</span> {region}
              </li>
              <li>
                <span className="font-bold">Subregion:</span> {subregion}
              </li>
            </ul>
          </div>
        </article>
      </Link>
    </>
  );
}
