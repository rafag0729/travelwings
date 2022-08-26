import { createContext, ReactElement, useState } from 'react';
import { CountryRequired } from 'interfaces';
import { useCountries } from 'hooks';



interface ContextInt {
    countriesList: CountryRequired[] | null;
    countrySelected: CountryRequired| null;
    setCountrySelected: (country: CountryRequired) => void;
}

export const CountriesContext = createContext<ContextInt>({
    countriesList: [],
    countrySelected: null,
    setCountrySelected: () => {}
});



interface Props {
    children: ReactElement[]
}

export const CountriesContextProvider = ({ children }: Props) => {

    const { countriesList } = useCountries();
    const [countrySelected, setCountrySelected] = useState<CountryRequired | null>(null);

    return (
        <CountriesContext.Provider value={{
            countriesList,
            countrySelected,
            setCountrySelected
        }}>
                { children }
        </CountriesContext.Provider> 
    )
}

