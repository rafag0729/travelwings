import { Container, Image } from '@chakra-ui/react'
import { useState } from 'react'
import { AccommodationComponent, AdditionalsComponent, DestinyComponent, ExclusionsComponent, FeedingComponent, PreviewOffer, PricingComponent, TicketsComponent, TranslationComponent } from './components'
import { AccomodationTypeAndDetails, HOTEL_DETAILS, StringOrNumber, TicketProps, TranslationType } from './components/interfaces';


export const AddOffer = () => {

  const [destinyList, setDestinyList] = useState<string[]>([]);
  const [ticketDetails, setticketDetails] = useState<TicketProps[]>([]);
  const [translation, setTranslation] = useState<TranslationType>('no-translation');
  const [accomodationValue, setAccomodationValue] = useState<AccomodationTypeAndDetails>({
    type: 'no-accomodation',
    details: HOTEL_DETAILS
  })
  const [feedingValues, setFeedingValues] = useState<StringOrNumber[]>([]);
  const [additionals, setAdditionals] = useState<StringOrNumber[]>([])
  
  return (
    <Container 
      mt="14"
      minW="full">
        <PreviewOffer 
          destiny={destinyList}
          ticket={ticketDetails}
          translation={translation}
          accomodation={accomodationValue}
          food={feedingValues}
          additionals={additionals}
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
        <AccommodationComponent 
          getAccomodationValues={(accomodation) => setAccomodationValue(accomodation)}
        />  
        <FeedingComponent 
          getFeedingValues={(food) => setFeedingValues(food)}
        />
        <AdditionalsComponent 
          getAdditionalsList={(addons) => setAdditionals(addons)}
        />
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
