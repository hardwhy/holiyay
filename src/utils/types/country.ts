import countries, { CountryName } from 'world-countries';

type Country = {
  code: string;
  name: CountryName;
  flag: string;
  location: [number, number];
  region: string;
};

export const formattedCountries: Country[] = countries.map((c) => ({
    code: c.cca2,
    flag: c.flag,
    location: c.latlng,
    name: c.name,
    region: c.region,
}));
