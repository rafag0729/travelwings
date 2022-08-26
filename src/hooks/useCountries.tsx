import { useEffect, useState } from "react";
import { CountryRequired } from "interfaces";
import { getAllCountries } from "services";
import { getCountriesSpecs, orderCountries } from "utils";



export const useCountries = () => {
  
   const [countriesList, setCountriesList] = useState<CountryRequired[] | null>(null);
    
    useEffect(() => {
        countries();
    }, [])

    const countries = async() => {
        const resp = await getAllCountries();
        const specs = getCountriesSpecs(resp);
        const ordered = orderCountries(specs);
        setCountriesList(ordered);
    }

    return { 
        countriesList
    }
}
