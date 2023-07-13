import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../Header";

export default function CountryDetails() {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const getCountryDetails = async () => {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        const data = await res.json();
        setCountry(data);
      } catch (error) {
        console.error(error);
      }
    };

    getCountryDetails();
  }, [name]);

  useEffect(() => {
    document.title = `Countries | ${name}`
  }, [name])

  let currenciesArr = [];

  let languagesArr = [];

  return (
    <>
      <Header />
      <section className="p-8 md:py-0 max-w-7xl mx-auto md:h-screen text-base text-main-900 dark:text-main-100">
        <Link
          to="/"
          className="inline-block my-12 bg-main-100 dark:bg-main-600 py-2 px-6 rounded shadow-[0_0_5px_rgba(0,0,0,0.3)] text-gray-700 hover:bg-main-200 transition-all duration-200"
        >
          &larr; Back
        </Link>

        {country.map((item) => (
          <div
            key={item.population}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 md:place-items-center"
          >
            <article>
              <img src={item.flags.svg} alt={item.flags.common} />
            </article>

            <article>
              <h1 className="mb-8 text-gray-900 dark:text-white font-bold leading-[3rem] text-[28px] lg:text-[44px]">
                {item.name.official}
              </h1>

              <div className="lg:flex flex-row gap-24 items-start mb-8">
                <ul className="my-4 flex flex-col items-start justify-start gap-2 text-slate-700 text-main-400 dark:text-main-400">
                  <li>
                    <span className="font-bold dark:text-main-100 text-main-900">Native Name:</span>{" "}
                    {
                      item.name.nativeName[Object.keys(item.name.nativeName)[0]]
                        .common
                    }
                  </li>
                  <li>
                    <span className="font-bold dark:text-main-100 text-main-900">Population:</span>
                    {' '}{item.population.toLocaleString()}
                  </li>
                  <li>
                    <span className="font-bold dark:text-main-100 text-main-900">Region:</span> {item.region}
                  </li>
                  <li>
                    <span className="font-bold dark:text-main-100 text-main-900">Sub Region:</span>{" "}
                    {item.subregion}
                  </li>
                  <li>
                    <span className="font-bold dark:text-main-100 text-main-900">Capital:</span>{" "}
                    {item.capital[0]}
                  </li>
                </ul>

                <ul className="my-4 dark:text-main-400 text-main-400">
                  <li>
                    <span className="font-bold dark:text-main-100 text-main-900">Top Level Domain:</span>{" "}
                    {item.tld[0]}
                  </li>
                  <li>
                    <span className="hidden">
                      {Object.keys(item.currencies).map((curr) => {
                        return currenciesArr.push(item.currencies[curr].name);
                      })}
                    </span>
                    <span className="font-bold dark:text-main-100 text-main-900">
                      {currenciesArr.length === 1
                        ? "Currency: "
                        : "Currencies: "}{" "}
                    </span>
                    {currenciesArr.join(", ")}
                  </li>
                  <li>
                    <span className="hidden dark:text-main-100 text-main-900">
                      {" "}
                      {Object.keys(item.languages).map((lang) => {
                        return languagesArr.push(item.languages[lang]);
                      })}
                    </span>

                    <span className="font-bold dark:text-main-100 text-main-900">
                      {languagesArr.length === 1 ? "Language: " : "Languages: "}
                    </span>
                    {languagesArr.join(", ")}
                  </li>
                </ul>
              </div>

              {item.borders ? (
                <>
                  <div className="flex gap-8">
                    <h3 className="text-gray-900 font-bold text-lg mb-2 dark:text-white">
                      Borders Countries:
                    </h3>

                    <div className="flex flex-wrap items-start justify-start gap-2">
                      {item.borders.map((border) => {
                        return (
                          <Link
                            to={`/${border}`}
                            key={border}
                            state={border}
                            className="py-1 px-3 rounded text-xs tracking-wide shadow-[0_0_5px_rgba(0,0,0,0.3)] cursor-pointer"
                          >
                            {border}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </>
              ) : (
                <>                <h3 className="text-gray-900 font-bold text-lg mb-2 dark:text-white">
                      Borders Countries:
                    </h3> <span>no border countries </span>
                    </>

              )}
            </article>
          </div>
        ))}
      </section>
    </>
  );
}
