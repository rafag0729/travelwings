import { CountriesResp, CountryReq } from '../interfaces/CountriesInterface';


export const getCountriesSpecs = (countries: CountriesResp[] = []): CountryReq[] => {

    return countries.map(({name, flags, idd}) => ({name, flags, idd }))
}