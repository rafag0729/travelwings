import { Container, Flex, Heading, Box } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { OffersInt } from "interfaces";
import { OfferArrows, OfferBox } from 'components';
import { useXPosition } from 'hooks';
import { offersData } from 'data';
import 'styles/animation.css';



export const Offers = () => {

  const offerRef = useRef([] as OffersInt[]);
  const [offers, setOffers] = useState<OffersInt[]>([]);
  const [paused, setPaused] = useState(false)
  
  useEffect(() => {
    offerRef.current = offersData;
    setOffers(offersData);
  }, []);

  const { x, moveRight } = useXPosition(50)

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
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            >
              <Flex
                flexDir="row"
                flexWrap="nowrap"
                transition="transform 600ms cubic-bezier(.17,.41,.37,.95)"
                transform={`translateX(${x}%)`}
                animation={`offersSlider 50s linear infinite ${paused ? 'paused' : 'running'}`}
                >
              { offers.map((o, i) => <OfferBox item={o} key={i}/>) }
              </Flex>
              
            {/* Left arrow */}
            {/* <OfferArrows
              xAxis={x}
              side="l"
              action={moveLeft}
            /> */}

            {/* Right arrow */}
            {/* <OfferArrows
              xAxis={x}
              side="r"
              action={moveRight}
            /> */}
          </Box>
          
          <OfferArrows
              xAxis={x}
              side="r"
              action={moveRight}
            />
        </Box>
    </Container>
  )
}
