import { Link } from "react-router-dom";
const CountryItem = ({ country }) => {
  const { region, population, name, flags, capital } = country;

  return (
    <Link
      to={`/countries/${name}`}
      className="group shadow-lg rounded-md cursor-pointer bg-white dark:bg-DarkBlue"
    >
      <div className="overflow-hidden rounded-t-md">
        <img
          src={flags.svg}
          alt="country-flag"
          className="w-full aspect-[3.3/2] object-cover group-hover:scale-110 smooth"
        />
      </div>
      <div className="py-8 px-6 space-y-3 text-VeryDarkBlue dark:text-white">
        <h2 className="text-xl md:text-2xl font-bold">{name}</h2>
        <ul className="space-y-1">
          <li className="">
            <span className="font-semibold text-lg">Population: </span>
            <span>{population}</span>
          </li>
          <li className="">
            <span className="font-semibold text-lg">Region: </span>
            <span>{region}</span>
          </li>
          <li className="">
            <span className="font-semibold text-lg">Capital: </span>
            <span>{capital}</span>
          </li>
        </ul>
      </div>
    </Link>
  );
};

export default CountryItem;
