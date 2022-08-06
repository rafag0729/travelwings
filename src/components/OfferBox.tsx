import { useEffect, useState } from "react"
import { Box, Button, Flex, HStack, Image, Text, useDisclosure } from "@chakra-ui/react"
import { FeedingIcon } from "../media/icons/FeedingIcon"
import { HotelIcon } from "../media/icons/HotelIcon"
import { PlaneIcon } from "../media/icons/PlaneIcon"
import { ToursIcon } from "../media/icons/ToursIcon"
import { OffersInt } from '../data/Offers';
import { transformRoomCost } from '../helpers/offers';



interface Props {
    item: OffersInt
}


export const OfferBox = ({item}: Props) => {

    const { image, place, price, room, includes } = item;

    const [roomCost, setRoomCost] = useState('0');
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        const p = transformRoomCost(price);
        setRoomCost(p);
    }, [price])

    return (
        <Box
            maxW="3xs"
            minW="3xs"
            minHeight="3xs"
            borderRadius="lg"
            boxShadow="lg"
            bgColor="white"
            mr="2"
            ml="2"
            position="relative"
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
            >
            <Image 
                borderTopLeftRadius="lg"
                borderTopRightRadius="lg"
                src={image}
                alt={place}/>
            <Flex
                flexDir="column"
                justifyContent="space-around"
                alignItems="stretch"
                minH="max" 
                p="4">
                <Text 
                color="brand.red"
                fontWeight="700"
                fontSize="sm"
                >{place}</Text>
                <Text
                color="blackAlpha.800"
                fontSize="sm"
                fontWeight="400"
                >Desde <Text as="em" fontWeight="700">{ roomCost }</Text> por persona en acomodación {room}</Text>
        
                <Text
                    color="blackAlpha.800"
                    fontSize="sm"
                    fontWeight="700"
                    mt="2"
                    mb="2"
                    >Incluye:</Text>

                <HStack>
                { includes.fly && <PlaneIcon />}
                { includes.hotel && <HotelIcon />}
                { includes.feeding && <FeedingIcon />}
                { includes.tours.length >= 1 && <ToursIcon list={ includes.tours } />}
                </HStack>
            </Flex>

            {/* Hovered box */}
            <Box
                position="absolute"
                top="0"
                minH="7"
                right="0"
                left="0"
                bgColor="red.500"
                borderRadius="lg"
                opacity="1"
                display="flex"
                justifyContent="center"
                alignItems="center"
                transform={`translateY(${isOpen ? '0' : '-100'}%)`}
                transition="transform 100ms linear"
            >
                <Button
                    size="sm"
                    colorScheme="red"
                    minW="full"
                >
                    Quiero esta oferta
                </Button>
            </Box>
        </Box>
  )
}
