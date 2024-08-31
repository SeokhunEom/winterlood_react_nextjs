import axios from "axios";

export interface Country {
  code: string;
  commonName: string;
  flagEmoji: string;
  flagImg: string;
  capital: string[];
  region: string;
  population: number;
}

export interface CountryDetail extends Country {
  officialName: string;
  googleMapURL: string;
}

export async function fetchCountries() {
  try {
    const response = await axios.get<Country[]>(
      "https://naras-api.vercel.app/all"
    );
    return response.data;
  } catch (e) {
    return [];
  }
}

export async function fetchSearchResults(q: string) {
  try {
    const response = await axios.get<Country[]>(`
  https://naras-api.vercel.app/search?q=${q}
  `);

    return response.data;
  } catch (e) {
    return [];
  }
}

export async function fetchCountry(code: string) {
  try {
    const response = await axios.get<CountryDetail>(
      `https://naras-api.vercel.app/code/${code}`
    );
    return response.data;
  } catch (e) {
    return null;
  }
}
