import React from "react";
import Card from "../Card";
import { useState, useEffect } from "react";
import Header from './../Header';

export default function HomePage() {
  const [countries, setCountries] = useState([]);
  const [searchText, setSearchText] = useState("");
  const regions = [
    {
      name: "Filter by Region",
    },
    {
      name: "Africa",
    },
    {
      name: "America",
    },
    {
      name: "Asia",
    },
    {
      name: "Europe",
    },
    {
      name: "Oceania",
    },
  ];

  useEffect(() => {
    const getCountries = async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        const data = await res.json();
        setCountries(data);
      } catch (error) {
        console.error(error);
      }
    };

    getCountries();
  }, []);

  const searchCountry = async () => {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${searchText}`
      );
      const data = await res.json();
      setCountries(data);
    } catch (error) {
      console.error(error);
    }
  };

  async function filterByRegion(region) {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/region/${region}`
      );
      const data = await res.json();
      setCountries(data);
    } catch (error) {
      console.error(error);
    }
  }

  const handleSearchCountry = (e) => {
    e.preventDefault();
    searchCountry();
    // e.target.name.value = "";
  };

  function handleFilterByRegion(e) {
    e.preventDefault();
    filterByRegion();
  }

  return (
    <>
    
      <Header />

      {!countries ? (
        <h1 className="text-main-900 font-bold uppercase tracking-wide flex items-center justify-center text-center h-screen text-4xl">
          loading....
        </h1>
      ) : (
        <section className="mx-auto p-8 dark:text-main-100">
          <div className="flex flex-col gap-4 md:flex-row md:item center md:justify-between sm:items-start sm:justify-start mb-8">
            <form
              onSubmit={handleSearchCountry}
              autoComplete="off"
              className="w-full md:w-[420px] lg:w-[400px] bg-main-100 dark:bg-main-600"
            >
              <div className="flex items-center gap-5 p-4 rounded shadow dark:shadow-sm outline-none transition-all duration-200">
                {/* <BsSearch className="ml-5 text-xl" /> */}
                <input
                  type="text"
                  name="search"
                  id="search"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  placeholder="Search for a country..."
                  required
                  className="w-full text-md outline-none bg-main-100 dark:text-main-100 placeholder:dark:text-main-400 dark:bg-main-600"
                />
              </div>
            </form>

            <form onSubmit={handleFilterByRegion}>
              <select
                name="filter-by-region"
                id="filter-by-region"
                value={regions.name}
                onChange={(e) => filterByRegion(e.target.value)}
                className="w-52 p-4 outline-none shadow dark:shadow-sm rounded text-main-900 dark:bg-main-600 dark:text-main-100"
              >
                {regions.map((region, index) => (
                  <option key={index} value={region.name}>
                    {region.name}
                  </option>
                ))}
              </select>
            </form>
            
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {countries.map((country) => (
              <Card key={country.name.common} {...country} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
