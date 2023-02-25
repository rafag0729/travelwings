import { useEffect, useState } from "react";
import { CountryRequired } from "interfaces";
import { getAllCountries } from "services";
import { getCountriesSpecs, orderCountries } from "utils";



export const useCountries = () => {
  
   const [countriesList, setCountriesList] = useState<CountryRequired[] | null>(null);
   const [countrySelected, setCountrySelected] = useState<CountryRequired | null>(null);
    
    useEffect(() => {
        countries
            .then((list) => {
                setCountriesList(list);
                setColCountry(list);
            } )
            .catch(e => console.log(e))
            .finally(() => {})
    }, [])

    const countries = new Promise<CountryRequired[]>(async(res, rej) => {
        try {
            const resp = await getAllCountries();
            const specs = getCountriesSpecs(resp);
            const ordered = orderCountries(specs);
            res(ordered);
        } catch (error) {
            rej(error)
        }
    })

    const setColCountry = (list: CountryRequired[]) => {
        const defaultCountry = list.filter(c => c.country.toLowerCase() === 'colombia');
        defaultCountry && setCountrySelected(defaultCountry[0])
    };

    const selectCountry = (country: CountryRequired) => {
        setCountrySelected(country)
    }

    return { 
        countriesList,
        countrySelected,
        selectCountry,
    }
}
