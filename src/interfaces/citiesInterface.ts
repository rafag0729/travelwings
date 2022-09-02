export interface CitiesInterface {
    type: string;
    subType: string;
    name: string;
    iataCode?: string;
    address: CityAddress;
    geoCode: CityGeoCode;
}

interface CityAddress {
    countryCode: string;
    stateCode: string;
}

interface CityGeoCode {
    latitude: number;
    longitude: number;
}