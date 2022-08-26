import { CountriesResp, CountryRequired } from 'interfaces';


export const getCountriesSpecs = (countries: CountriesResp[] = []): CountryRequired[] => {

    return countries.map(({name, flags, idd, fifa}) => ({
        country: name.common, 
        flagImage: flags.png, 
        idd,
        fifaCode: fifa
    }))
}

export const orderCountries = (countries: CountryRequired[]): CountryRequired[] => {

    countries.sort( (a, b) => {
        let ca = a.country.toLocaleLowerCase();
        let cb = b.country.toLocaleLowerCase();

        if (ca < cb) return -1;
        if (ca > cb) return 1;
        return 0;
    })

    return countries;
}