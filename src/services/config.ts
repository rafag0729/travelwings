import axios, { AxiosInstance } from 'axios';

export const axiosConfig: AxiosInstance = axios.create({
    baseURL: 'https://restcountries.com/v3.1'
})
