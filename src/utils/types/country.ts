import countries from 'world-countries';

type Country = {
  code: string;
  name: string;
  flag: string;
  location: [number, number];
  region: string;
};

export const formattedCountries: Country[] = countries.map((c) => ({
    code: c.cca2,
    flag: c.flag,
    location: c.latlng,
    name: c.name.common,
    region: c.region,
}));

export const findCountryByCode = (code: string): Country | undefined => {
  return formattedCountries.find((c) => c.code === code);
};
