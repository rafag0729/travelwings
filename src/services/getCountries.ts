import axios from './config';

export const getAllCountries = async() => {

    try {
        const {data} = await axios.get('/all');
        return data;
    } catch (error) {
        console.log({
            msg: 'Error getting counties',
            error
        })
    }

}