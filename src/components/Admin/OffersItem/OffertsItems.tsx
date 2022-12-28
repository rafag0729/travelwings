import { Box, Checkbox, CheckboxGroup, Flex, IconButton, Image, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'

export const OffertsItems = () => {
  return (
    <Box boxShadow="lg" maxW="3xs" borderRadius="md" p="4">
      <Text
        textTransform="uppercase"
        color="brand.green"
        fontWeight="bold"
      >Oferta 1</Text>
      <Text fontWeight="bold">Santa Marta</Text>
      <Image src='https://res.cloudinary.com/duljg8kl5/image/upload/v1656984517/travel-wings/santa_marta_oiswtz.png'/> 
      <UnorderedList>
        <ListItem>Acomodación Triple</ListItem>
        <ListItem>Junio 6 - Julio 2</ListItem>
        <ListItem>Precio</ListItem>
      </UnorderedList>
      <Text
        fontWeight="semibold"
        mt="4">Incluye </Text>
        <Flex flexDirection="column">
          <CheckboxGroup>
            <Checkbox checked={true}>Vuelo ida y vuelta</Checkbox>
            <Checkbox checked={true}>Alimentación</Checkbox>
            <Checkbox checked={true}>Hospedaje</Checkbox>
            <Checkbox checked={true}>Tours</Checkbox>
          </CheckboxGroup>
        </Flex>
        <Flex flexDirection="row" justifyContent="flex-end">
          <IconButton
            mr="2"
            size="xs"
            aria-label='Edit'
            icon={<AiFillEdit />} />
          <IconButton
            size="xs"
            aria-label='Delete'
            icon={<AiFillDelete />} />
        </Flex>
    </Box>
  )
}
