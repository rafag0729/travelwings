import { Container, Image } from '@chakra-ui/react'
import { useState } from 'react'
import { AccommodationComponent, AdditionalsComponent, DestinyComponent, ExclusionsComponent, FeedingComponent, PreviewOffer, PricingComponent, TicketsComponent, TranslationComponent } from './components'
import { AccomodationTypeAndDetails, HOTEL_DETAILS, PricingDetailsType, StringOrNumber, TicketProps, TranslationType } from './components/interfaces';

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
  const [exclusions, setExclusions] = useState<string[]>([]);
  const [pricingDetails, setPricingDetails] = useState<PricingDetailsType>({
    currency: 'cop',
    costSelection: 'totals',
    bookingDetails: {
      type: 'currency',
      bookingValue: '',
    },
    personsNumber: 1,
    price: ''
  })
  
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
          exclusions={exclusions}
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
        <ExclusionsComponent 
          getExclusionsList={(list) => setExclusions(list)}
        />
        <PricingComponent 
          pricingDetails={pricingDetails}
          setPricingDetails={setPricingDetails}
        />
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
