
interface OffersInt {
    place: string;
    image: string;
    price: number;
    room: 'sencilla' | 'doble' | 'triple' | 'cuadruple' | 'quintuple',
    includes: {
        fly: boolean,
        hotel: boolean,
        feeding: boolean,
        tours: string[]
    }
}


export const offers: OffersInt[] = [{
    place: 'Santa Marta',
    image: '',
    price: 650000,
    room: 'doble',
    includes: {
        fly: true,
        hotel: true,
        feeding: true,
        tours: []
    }
}]