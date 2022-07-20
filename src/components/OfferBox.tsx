import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react"
import { FeedingIcon } from "../media/icons/FeedingIcon"
import { HotelIcon } from "../media/icons/HotelIcon"
import { PlaneIcon } from "../media/icons/PlaneIcon"
import { ToursIcon } from "../media/icons/ToursIcon"
import { OffersInt } from '../data/Offers';
import { transformRoomCost } from '../helpers/transformRoomCost';



interface Props {
    item: OffersInt
}


export const OfferBox = ({item}: Props) => {

    const { image, place, price, room, includes } = item;

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
                >Desde <Text as="em" fontWeight="700">{ transformRoomCost(price) }</Text> por persona en acomodación {room}</Text>
        
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
        </Box>
  )
}
