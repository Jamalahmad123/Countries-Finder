import { useState, useContext, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import GlobalContext from "../context/GlobalContext";

const SearchCountries = () => {
  const [text, setText] = useState("");
  const [region, setRegion] = useState("");
  const { getCountries, getCountriesByName, getCountriesByRegion } =
    useContext(GlobalContext);

  const handleText = (e) => {
    setText(e.target.value);
    if (e.target.value.length >= 4) {
      getCountriesByName(e.target.value);
    } else if (e.target.value.length === 0) {
      getCountries();
    }
  };

  const handleFilter = (e) => {
    setRegion(e.target.value);
    if (
      e.target.value.length === "" ||
      e.target.value.toLowerCase() === "filter by region"
    ) {
      getCountries();
    } else {
      getCountriesByRegion(e.target.value);
    }
  };

  return (
    <section className="py-10 bg-VeryLightGray dark:bg-VeryDarkBlue">
      <div className="container mx-auto px-4 flex flex-col items-start gap-4 justify-between sm:flex-row">
        <div className="w-full md:max-w-sm">
          <div className="flex items-center gap-2 shadow-xl py-4 px-6 bg-white dark:bg-DarkBlue rounded-lg">
            <FaSearch className="text-DarkGray" />
            <input
              type="text"
              className="w-full text-VeryDarkBlue2 dark:text-white text-lg bg-transparent outline-none focus:outline-none placeholder:text-DarkGray"
              placeholder="Search for a country"
              value={text}
              onChange={handleText}
            />
          </div>
        </div>
        <div>
          <select
            name="filter-countries"
            id="filterCountrie"
            className="shadow-lg outline-none w-[150px] py-4 px-2 text-VeryDarkBlue2 dark:text-white bg-white dark:bg-DarkBlue"
            value={region}
            // defaultValue="filter by region"
            onChange={handleFilter}
          >
            <option defaultValue>Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default SearchCountries;
