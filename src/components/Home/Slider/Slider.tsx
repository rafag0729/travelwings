import AliceCarousel from 'react-alice-carousel';
import { Box, Center, Container, Heading, Image } from "@chakra-ui/react";
import { sliderImagesData } from 'data';
import "react-alice-carousel/lib/alice-carousel.css";


export const Slider = () => {
  return (
    <Container mt="10" p="0" maxW="full">
      <AliceCarousel autoPlay autoPlayInterval={3000} infinite disableButtonsControls disableDotsControls>
        { sliderImagesData.map(({image, color, quote}) => (
          <Box position="relative" key={image}>
            <Image src={image} alt="Capadoccia"/>
            <Center 
              filter="opacity(80%)"
              position="absolute" 
              bottom="6"
              left="6"
              p="8"
              borderRadius="full"
              bgColor={`brand.${color}`}>
              <Heading color="white">{quote}</Heading>
            </Center>
          </Box>
          ))
        }
      </AliceCarousel> 
    </Container>
  )
}
