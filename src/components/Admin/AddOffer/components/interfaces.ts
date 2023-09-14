export interface TicketProps {
  type: TicketTypeProps;
  details: TicketDetailsProps | null;
}

type TicketTypeProps = 'ida' | 'regreso';

export interface TicketDetailsProps {
  city: string;
  date: string;
  airline: string;
}

export interface TicketPropsExtended extends TicketDetailsProps {
  type?: TicketType
}

export type TicketType = 'ida' | 'regreso';