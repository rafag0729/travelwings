import { createContext, ReactElement } from 'react';
import { CountryRequired } from 'interfaces';
import { useCountries } from 'hooks';



interface ContextInt {
    countriesList: CountryRequired[] | null;
    countrySelected: CountryRequired| null;
    selectCountry: (country: CountryRequired) => void;
}

export const CountriesContext = createContext<ContextInt>({
    countriesList: [],
    countrySelected: null,
    selectCountry: () => {}
});

interface Props {
    children: ReactElement[]
}

export const CountriesContextProvider = ({ children }: Props) => {

    const {countriesList, selectCountry, countrySelected} = useCountries();

    return (
        <CountriesContext.Provider value={{
            countriesList,
            countrySelected,
            selectCountry
        }}>
                { children }
        </CountriesContext.Provider> 
    )
}

