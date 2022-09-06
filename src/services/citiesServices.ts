import { CitiesInterface } from 'interfaces';
import { axiosCities } from './axiosConfig';
import { citiesData } from '../data/citiesData';

export const getCities = (): Promise<CitiesInterface[]> => {

    const fetchCities: Promise<CitiesInterface[]> = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(true){
                resolve(citiesData);
            }
        }, 3000) 
    })

    return fetchCities;
}