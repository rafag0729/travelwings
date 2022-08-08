export interface OffersInt {
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
