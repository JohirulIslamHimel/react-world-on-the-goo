import React, { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountries, handleVisitedFlag }) => {
  //   console.log(country.name.common);
  const [visited, setVisited] = useState(false);
  //   console.log("Country visited");

  const handleVisited = () => {
    // console.log("Button Clicked");
    // setVisited(true);
    //Basic system
    // if (visited) {
    //   setVisited(false);
    // } else {
    //   setVisited(true);
    // }
    //2nd system
    // setVisited(visited ? false : true);
    // 3rd system
    setVisited(!visited);
    handleVisitedCountries(country);
  };

  return (
    <div className={`country ${visited && "country-visited"}`}>
      <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
      <h3>Name : {country.name.common}</h3>
      <p>Population : {country.population.population}</p>
      <p>Capital : {country.capital.capital}</p>
      <p>Region : {country.region.region}</p>
      <p>
        Currencies :{" "}
        {country.currencies?.currencies
          ? Object.values(country.currencies.currencies)[0]?.name
          : "Not Found"}
      </p>

      <p>
        Area : {country.area.area}{" "}
        {country.area.area > 300000 ? "Big County" : "Small Country"}
      </p>
      <button onClick={handleVisited}>
        {visited ? "Visited" : "Not Visited"}
      </button>
      <button
        onClick={() => {
          handleVisitedFlag(country?.flags?.flags?.png);
        }}
      >
        Add Visited Flag
      </button>
    </div>
  );
};

export default Country;
