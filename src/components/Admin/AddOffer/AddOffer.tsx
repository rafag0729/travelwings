import { Box, Container, Flex } from '@chakra-ui/react'
import { AccommodationComponent, AdditionalsComponent, DestinyComponent, ExclusionsComponent, FeedingComponent, TicketsComponent, TranslationComponent } from './components'


export const AddOffer = () => {

  return (
    <Container 
      mt="14"
      minW="full">
      <Flex>
        <Box>
          <DestinyComponent />
          <TicketsComponent />
          <TranslationComponent />
          <AccommodationComponent />
          <FeedingComponent />
          <AdditionalsComponent />
          <ExclusionsComponent />
        </Box>

        {/* <Image
          borderStyle="dashed"
          borderColor="green.300"
          borderWidth="medium"
          boxSize="md"
          borderRadius="lg"
          ml="8"
        /> */}
      </Flex>
    </Container>
  )
}
