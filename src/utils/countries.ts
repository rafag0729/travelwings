import { CountriesResp, CountryRequired } from 'interfaces';


export const getCountriesSpecs = (countries: CountriesResp[] = []): CountryRequired[] => {

    return countries.map(({name, flags, idd, fifa}) => ({
        country: name.common, 
        flagImage: flags.png, 
        idd,
        fifaCode: fifa
    }))
}