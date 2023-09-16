import { Badge, Box, Button, Container, Divider, Flex, Heading, Image, List, ListIcon, ListItem, Text, UnorderedList } from "@chakra-ui/react"
import { OfferBox } from "components/Home/Offers/OfferBox"
import { OffersInt } from "interfaces"
import { Fragment, useState } from "react"
import { RxOpenInNewWindow } from "react-icons/rx"
import { MdAddShoppingCart, MdEmojiTransportation, MdFastfood, MdLocalHotel, MdOutlineEmojiTransportation, MdOutlineNoFood } from "react-icons/md"
import { AiFillFolderAdd, AiFillStop } from "react-icons/ai"
import { FaBed, FaHotel, FaPlane } from "react-icons/fa"
import { StringOrNumber, TicketProps } from "./interfaces"

const ITEM: OffersInt = {
  place: '', 
  image: '', 
  price: 0, 
  room: "doble", 
  includes: {
    fly: false,
    feeding: false,
    hotel: false,
    tours: []
  }
}

interface PreviewOfferProps {
  destiny: string[];
  ticket: TicketProps[];
  translation: 'no-translation' | 'translation';
  food: StringOrNumber[];
}

export const PreviewOffer = ({destiny, ticket, translation, food}: PreviewOfferProps) => {

  const [watchPreview, setWatchPreview] = useState(false);

  const ticketDescription = (): string => {
    if (ticket.length === 2) return 'Ida y regreso'
    if (ticket[0].type === 'ida') return 'Solo ida'
    if (ticket[0].type === 'regreso') return 'Solo regreso'
    return '';
  }
  
  return (
    <>
      <Container
        position='fixed'
        bottom='0'
        right='0'
        bgColor='white'
        zIndex='100'
        mb="10">
          <Button
          position='absolute'
          right='0'
          bottom='-6'
          top='-14'
          onClick={() => setWatchPreview((prev) => !prev)}
          leftIcon={<RxOpenInNewWindow />}
          colorScheme='teal'>
            Ver vista previa de la oferta
          </Button>
          { watchPreview && (
            <Box
              overflow='hidden'
              borderRadius='2xl'
              boxShadow='lg'
              >
              <Flex 
                dir="row" 
                justifyContent="space-between"
                flexWrap="nowrap"
                >
                <Image
                  src={require('assets/imgs/flyers/santa_marta.png')}
                  maxW="xs"
                />
                <Box
                  pt='2' 
                  ml="4">  
                  <Heading
                    color="brand.blue"
                    fontSize="2xl"
                    textTransform='capitalize'
                  >{destiny.length > 0 ? destiny.join(', ') : 'Añade un destino'}</Heading>

                  <Text fontSize='xl'>
                    Incluye
                  </Text>

                  <List>
                    { ticket.length > 0 && (
                      <ListItem>
                        <ListIcon as={FaPlane} color='teal' />
                        Tiquetes aeros: {ticketDescription()}</ListItem>
                    )}
                    <ListItem>
                      <ListIcon as={FaBed} color='teal' />
                      4 días / 3 noches de alojamiento</ListItem>
                    { translation === 'translation' && (
                      <ListItem>
                        <ListIcon as={FaHotel} color='teal' />
                        Traslado aeropuerto hotel aeropuerto
                      </ListItem>
                    )}
                    { food.length >= 1 && (
                      <ListItem>
                        <ListIcon as={MdFastfood} color='teal' />
                        Alimentación
                      </ListItem>
                    )}
                    <ListItem>
                      <ListIcon as={MdAddShoppingCart} color='teal' />
                      Adicionales:
                    </ListItem>
                    <ListItem>
                      <ListIcon as={AiFillStop} color='teal' />
                      No incluye:
                    </ListItem>
                  </List>
                  
                  <Box mt='2'>
                  <Text
                    mb='-2'
                    fontSize='sm'>Desde</Text>
                    <Flex dir="row">
                      <Text
                      ml='2'
                      fontSize='4xl'
                      fontWeight='bold'
                      color='red.400'>$950.000
                      </Text>
                      <Text
                        mt='2'
                        color='red.400'
                        fontWeight='bold'
                        fontSize='x-small'>
                        COP / persona</Text>
                    </Flex>
                    <Badge
                      position='absolute'
                      top='0'
                      left='0'
                      size='lg'
                      transform='translateX(-20%) translateY(40%) rotate(-45deg)'
                      colorScheme='red'
                      variant='solid'>
                      Reserva con el 10%
                    </Badge>
                  </Box>
                </Box>
              </Flex>
            </Box> 
          )}
      </Container>
    </>
    
  )
}
