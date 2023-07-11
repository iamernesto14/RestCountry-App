import React from "react";
import Header from "../Header";
import Search from "../Search";
import Card from "../Card";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [countries, setCountries] = useState([]);

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
  return (
    <>
      <Header />
      <Search />
      {!countries ? (
        <h1 className="text-gray-900 font-bold uppercase tracking-wide flex items-center justify-center text-center h-screen text-4xl">
          loading....
        </h1>
      ) : (
        <section className="mx-auto p-8">

          {/* form */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
            
            {countries.map((country) => (
              <Card key={country.name.common} {...country} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
