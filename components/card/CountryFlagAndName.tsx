import { findCountryByCode } from "@/utils/countries";
import Flag from "react-world-flags";
function CountryFlagAndName({ countryCode }: { countryCode: string }) {
  const validCountry = findCountryByCode(countryCode);
  const countryName =
    validCountry!.name.length > 20
      ? `${validCountry!.name.substring(0, 20)}...`
      : validCountry!.name;
  return (
    <span className="flex items-center gap-2 text-sm ">
      {validCountry && (
        <>
          <Flag code={countryCode} style={{ width: 20, height: 20 }} />{" "}
          {countryName}
        </>
      )}
    </span>
  );
}
export default CountryFlagAndName;
