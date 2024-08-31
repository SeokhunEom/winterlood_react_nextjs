import { Country } from "@/api";
import CountryItem from "./CountryItem";
import style from "./CountryList.module.css";

interface CountryListProps {
  countries: Country[];
}

export default function CountryList({ countries }: CountryListProps) {
  return (
    <div className={style.container}>
      {countries.map((country) => (
        <CountryItem key={country.code} {...country} />
      ))}
    </div>
  );
}

CountryList.defaultProps = {
  countries: [],
};
