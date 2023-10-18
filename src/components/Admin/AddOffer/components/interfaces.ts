export interface TicketProps {
  type: TicketTypeProps;
  details: TicketDetailsProps | null;
}

type TicketTypeProps = 'ida' | 'regreso';

export interface TicketDetailsProps {
  city: string;
  date: Date | null;
  airline: string;
}

export interface TicketPropsExtended extends TicketDetailsProps {
  type?: TicketType
}

export type TicketType = 'ida' | 'regreso';

export type TranslationType = 'no-translation' | 'translation';

export type StringOrNumber = string | number;

export type AccomodationType = 'no-accomodation' | 'hotel' | 'hostel' | 'airbnb';

export type RoomDetailType = {
  type: string;
  quantity: string; 
}

export interface HotelDetailsProps {
  name: string;
  type: string;
  startDate: Date | '';
  endDate: Date | '';
  rooms: RoomDetailType[],
}

export interface AccomodationTypeAndDetails {
  type: AccomodationType,
  details: HotelDetailsProps;
}

export const HOTEL_DETAILS: HotelDetailsProps = {
  name: '',
  type: '',
  startDate: '',
  endDate: '',
  rooms: [],
}