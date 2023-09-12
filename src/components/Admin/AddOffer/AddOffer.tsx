import { Container, Image } from '@chakra-ui/react'
import { useState } from 'react'
import { AccommodationComponent, AdditionalsComponent, DestinyComponent, ExclusionsComponent, FeedingComponent, PreviewOffer, PricingComponent, TicketsComponent, TranslationComponent } from './components'
import { TicketProps } from './components/interfaces';


export const AddOffer = () => {

  const [destinyList, setDestinyList] = useState<string[]>([]);
  const [ticketDetails, setticketDetails] = useState<TicketProps[]>([]);
  
  return (
    <Container 
      mt="14"
      minW="full">
        <PreviewOffer 
          destiny={destinyList}
          ticket={ticketDetails}
        />
        <DestinyComponent 
          getDestinyList={(list) => setDestinyList(list)}
        />
        <TicketsComponent 
          getTicketDetails={(ticket) => setticketDetails(ticket)}
        />
        <TranslationComponent />
        <AccommodationComponent />  
        <FeedingComponent />
        <AdditionalsComponent />
        <ExclusionsComponent />
        <PricingComponent />
        <Image
          borderStyle="dashed"
          borderColor="green.300"
          borderWidth="medium"
          boxSize="md"
          borderRadius="lg"
          ml="8"/>
    </Container>
  )
}
