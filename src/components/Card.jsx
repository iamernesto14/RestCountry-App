// import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Card({ flags, name, population, region, subregion }) {
  return (
    <>
      <Link to={`/${name.common}`}>
        <article className="bg-main-100 dark:bg-main-600 dark:hover:bg-main-900 hover:bg-main-200 rounded-lg shadow-sm overflow-hidden">
          <img src={flags.svg} alt={flags.alt} className="h-40 w-full object-cover" />
          <div className="px-3 py-7">
            <h2 className="text-[17px] text-black mb-4 font-bold">{name.common}</h2>
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
