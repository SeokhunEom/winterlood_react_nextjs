import { Country, fetchCountries } from "@/api";

import CountryList from "@/components/CountryList";
import Head from "next/head";
import Searchbar from "@/components/Searchbar";

interface HomeProps {
  countries: Country[];
}

export default function Home({ countries }: HomeProps) {
  return (
    <>
      <Head>
        <title>NARAS</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="NARAS" />
        <meta
          property="og:description"
          content="전 세계 국가들의 정보를 확인해보세요"
        />
      </Head>
      <Searchbar />
      <CountryList countries={countries} />
    </>
  );
}

export const getStaticProps = async () => {
  const countries = await fetchCountries();
  console.log("countries 데이터 불러옴");

  return {
    props: {
      countries,
    },
  };
};
