import axios, { AxiosInstance } from 'axios';

export const axiosCountries: AxiosInstance = axios.create({
    baseURL: 'https://restcountries.com/v3.1'
})

export const axiosCities: AxiosInstance = axios.create({
    baseURL: 'https://travel-wings-back.vercel.app/api/cities'
})