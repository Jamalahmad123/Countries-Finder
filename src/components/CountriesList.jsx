import { useContext } from "react";
import Spinner from "../components/Spinner";
import GlobalContext from "../context/GlobalContext";
import CountryItem from "./CountryItem";

const CountriesList = () => {
  const { countries, isLoading } = useContext(GlobalContext);

  return !isLoading ? (
    <section className="py-10 bg-VeryLightGray dark:bg-VeryDarkBlue">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {countries.length >= 1 &&
            countries.map((country) => (
              <CountryItem key={country.name} country={country} />
            ))}
        </div>
      </div>
    </section>
  ) : (
    <Spinner />
  );
};

export default CountriesList;
