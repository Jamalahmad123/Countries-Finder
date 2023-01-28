import { useState, useEffect, createContext } from "react";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // Get All Countries
  async function getCountries() {
    setIsLoading(true);
    const response = await fetch(`https://restcountries.com/v2/all`);
    const data = await response.json();
    setCountries(data);
    setIsLoading(false);
  }

  useEffect(() => {
    getCountries();
  }, []);

  const getCountriesByName = async (name) => {
    const response = await fetch(`https://restcountries.com/v2/name/${name}`);
    const data = await response.json();
    setCountries(data);
  };

  const getCountriesByRegion = async (region) => {
    const response = await fetch(
      `https://restcountries.com/v2/region/${region}`
    );
    const data = await response.json();
    setCountries(data);
  };

  const getCountryDetails = async (name) => {
    setIsLoading(true);
    const response = await fetch(
      `https://restcountries.com/v2/name/${name.toLowerCase()}?fullText=true`
    );
    const [data] = await response.json();
    setCountry(data);
    setIsLoading(false);
  };

  return (
    <GlobalContext.Provider
      value={{
        countries,
        country,
        isLoading,
        getCountries,
        getCountriesByName,
        getCountriesByRegion,
        getCountryDetails,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
