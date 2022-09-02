import { axiosCountries } from 'services';

export const getAllCountries = async() => {

    try {
        const {data} = await axiosCountries.get('/all');
        return data;
    } catch (error) {
        console.log({
            msg: 'Error getting counties',
            error
        })
    }
}