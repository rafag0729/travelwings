import { Container, Image } from '@chakra-ui/react'
import { useState } from 'react'
import { AccommodationComponent, AdditionalsComponent, DestinyComponent, ExclusionsComponent, FeedingComponent, PreviewOffer, PricingComponent, TicketsComponent, TranslationComponent } from './components'
import { TicketProps, TranslationType } from './components/interfaces';


export const AddOffer = () => {

  const [destinyList, setDestinyList] = useState<string[]>([]);
  const [ticketDetails, setticketDetails] = useState<TicketProps[]>([]);
  const [translation, setTranslation] = useState<TranslationType>('no-translation')
  
  return (
    <Container 
      mt="14"
      minW="full">
        <PreviewOffer 
          destiny={destinyList}
          ticket={ticketDetails}
          translation={translation}
        />
        <DestinyComponent 
          getDestinyList={(list) => setDestinyList(list)}
        />
        <TicketsComponent 
          getTicketDetails={(ticket) => setticketDetails(ticket)}
        />
        <TranslationComponent 
          getTranslation={(id) => setTranslation(id)}
        />
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
