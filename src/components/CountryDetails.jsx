import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import { useEffect } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import Spinner from "./Spinner";

const CountryDetails = () => {
  const { country, isLoading, getCountryDetails } = useContext(GlobalContext);

  const params = useParams();

  const {
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
    flag,
  } = country;

  useEffect(() => {
    getCountryDetails(params.country);
  }, []);

  // if (isLoading) {
  //   console.log("loading");
  //   return <Spinner />;
  // }

  return (
    <>
      {/* min-h-[100dvh] min-h-screen  */}
      {!isLoading ? (
        <main className="bg-white dark:bg-VeryDarkBlue">
          <div className="space-y-10 py-14 container mx-auto px-4">
            <Link
              to="/"
              className="flex items-center gap-2 shadow-md bg-white dark:bg-DarkBlue text-VeryDarkBlue dark:text-white dark:text p-4 max-w-[7rem] font-semibold rounded-lg group"
            >
              <FaLongArrowAltLeft size={20} />
              <span className="group-hover:ml-2 smooth inline-block">Back</span>
            </Link>
            <div className="flex flex-col items-center justify-center lg:flex-row gap-8">
              <div className="flex-1">
                <img
                  src={flag}
                  alt={name}
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="flex-1 space-y-10">
                <h1 className="text-VeryDarkBlue dark:text-white text-xl font-bold md:text-2xl">
                  {name}
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
                  <ul className="space-y-4">
                    <li className="text-VeryDarkBlue dark:text-white">
                      <span className="font-semibold text-lg">
                        Native Name:{" "}
                      </span>
                      <span>{nativeName}</span>
                    </li>
                    <li className="text-VeryDarkBlue dark:text-white">
                      <span className="font-semibold text-lg">
                        Population:{" "}
                      </span>
                      <span>{population}</span>
                    </li>
                    <li className="text-VeryDarkBlue dark:text-white">
                      <span className="font-semibold text-lg">Region: </span>
                      <span>{region}</span>
                    </li>
                    <li className="text-VeryDarkBlue dark:text-white">
                      <span className="font-semibold text-lg">
                        Sub Region:{" "}
                      </span>
                      <span>{subregion}</span>
                    </li>
                    <li className="text-VeryDarkBlue dark:text-white">
                      <span className="font-semibold text-lg">Capital: </span>
                      <span>{capital}</span>
                    </li>
                  </ul>
                  <div className="space-y-4">
                    <ul className="space-y-4">
                      <li className="text-VeryDarkBlue dark:text-white">
                        <span className="font-semibold text-lg">
                          Top Level Domains:{" "}
                        </span>
                        <span>{topLevelDomain?.[0]}</span>
                      </li>
                      <li className="text-VeryDarkBlue dark:text-white">
                        <span className="font-semibold text-lg">
                          Currencies:{" "}
                        </span>
                        <span>{currencies?.[0].name}</span>
                      </li>
                      <li className="text-VeryDarkBlue dark:text-white">
                        <span className="font-semibold text-lg">
                          Languages:{" "}
                        </span>
                        {languages?.map(({ name }, i) => (
                          <span key={i} className="ml-2">
                            {name}
                          </span>
                        ))}
                      </li>
                    </ul>
                  </div>
                </div>
                {borders?.length > 1 && (
                  <div className="flex items-start gap-4">
                    <h3 className="font-semibold text-xl text-VeryDarkBlue dark:text-white">
                      Border Countries:
                    </h3>
                    <ul className="flex items-center gap-3 flex-wrap">
                      {borders.map((border) => (
                        <li
                          key={border}
                          className="px-4 py-2 bg-slate-100 shadow-lg"
                        >
                          {border}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default CountryDetails;
