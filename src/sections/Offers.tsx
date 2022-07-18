import { Container, Flex, Heading } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { offers as offersData, OffersInt } from '../data/Offers';
import { OfferBox } from "../components/OfferBox";



export const Offers = () => {

  const offerRef = useRef([] as OffersInt[]);
  const [offers, setOffers] = useState<OffersInt[]>([]);

  useEffect(() => {
    offerRef.current = offersData;
    setOffers(offersData);
  }, []);

  return (
    <Container
      mx="0"
      mt="12"
      mb="20"
      minW="full"> 
      <Heading
        mb="4"
        fontSize="xl"
        color="brand.red"
        >Nuestras últimas ofertas</Heading>

        <Flex
          flexDir="row"
          flexWrap="nowrap"
          border="1px solid red"
          overflow="hidden"
          minW="full"
          >
          {
            offers.map((o, i) => <OfferBox item={o} key={i}/>)
          }
        </Flex>
    </Container>
  )
}
