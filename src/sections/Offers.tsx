import { Container, Flex, Heading, Box } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { offers as offersData, OffersInt } from '../data/Offers';
import { OfferArrows } from '../components/OfferArrows';
import { OfferBox } from "../components/OfferBox";
import { useXPosition } from '../hooks/useXPosition';
import './../styles/animation.css';



export const Offers = () => {

  const offerRef = useRef([] as OffersInt[]);
  const [offers, setOffers] = useState<OffersInt[]>([]);
  
  useEffect(() => {
    offerRef.current = offersData;
    setOffers(offersData);
  }, []);

  const { x, moveLeft, moveRight } = useXPosition(50)

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

        <Box position="relative">
          <Box
            overflow="hidden"
            minW="full"
            >
              <Flex
                flexDir="row"
                flexWrap="nowrap"
                transition="transform 600ms cubic-bezier(.17,.41,.37,.95)"
                transform={`translateX(${x}%)`}
                >
              { offers.map((o, i) => <OfferBox item={o} key={i}/>) }
              </Flex>
              
            {/* Left arrow */}
            <OfferArrows
              xAxis={x}
              side="l"
              action={moveLeft}
            />

            {/* Right arrow */}
            <OfferArrows
              xAxis={x}
              side="r"
              action={moveRight}
            />
          </Box>
        </Box>
    </Container>
  )
}
