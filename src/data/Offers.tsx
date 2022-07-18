
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


export const offers: OffersInt[] = [
    {
        place: 'Santa Marta',
        image: 'https://res.cloudinary.com/duljg8kl5/image/upload/v1656984517/travel-wings/santa_marta_oiswtz.png',
        price: 880000,
        room: 'doble',
        includes: {
            fly: true,
            hotel: true,
            feeding: true,
            tours: ['Vuelta a la isla']
        },
    },
    {
        place: 'Amazonas',
        image: 'https://res.cloudinary.com/duljg8kl5/image/upload/v1656984516/travel-wings/amazonas_vmxhfg.png',
        price: 650000,
        room: 'quintuple',
        includes: {
            fly: false,
            hotel: true,
            feeding: false,
            tours: []
        },
    },
    {
        place: 'Cancún',
        image: 'https://res.cloudinary.com/duljg8kl5/image/upload/v1656984518/travel-wings/cancun_qs5s2b.png',
        price: 2600000,
        room: 'triple',
        includes: {
            fly: true,
            hotel: true,
            feeding: true,
            tours: []
        },
    },
    {
        place: 'Punta Cana',
        image: 'https://res.cloudinary.com/duljg8kl5/image/upload/v1656984517/travel-wings/punta_cana_ziwyxw.png',
        price: 1800000,
        room: 'doble',
        includes: {
            fly: false,
            hotel: true,
            feeding: true,
            tours: []
        },
    },
    {
        place: 'Crucero',
        image: 'https://res.cloudinary.com/duljg8kl5/image/upload/v1656984516/travel-wings/crucero_y5ax2s.png',
        price: 1300000,
        room: 'triple',
        includes: {
            fly: false,
            hotel: true,
            feeding: true,
            tours: []
        },
    },
    {
        place: 'Orlando',
        image: 'https://res.cloudinary.com/duljg8kl5/image/upload/v1656984517/travel-wings/orlando_iewgku.png',
        price: 3500000,
        room: 'triple',
        includes: {
            fly: true,
            hotel: true,
            feeding: false,
            tours: []
        },
    },
    {
        place: 'Cartagena',
        image: 'https://res.cloudinary.com/duljg8kl5/image/upload/v1656984516/travel-wings/cartagena_gbw5ye.png',
        price: 780000,
        room: 'triple',
        includes: {
            fly: true,
            hotel: true,
            feeding: true,
            tours: []
        },
    },
    {
        place: 'Europa',
        image: 'https://res.cloudinary.com/duljg8kl5/image/upload/v1656984517/travel-wings/grecia_rfqfi3.png',
        price: 20000000,
        room: 'triple',
        includes: {
            fly: true,
            hotel: true,
            feeding: true,
            tours: []
        },
    },
]