import { Button, Flex, Heading, Text } from '@chakra-ui/react'
import { OfferItem } from '../OfferItem/OfferItem'
import { collection, addDoc, getDocs } from "firebase/firestore"; 
import Database from 'firebaseConfig/firestore'
import { useEffect, useState } from 'react';



export const DashboardOffers = () => {

  const [offersList, setOffersList] = useState([1, 2, 3])

  useEffect(() => {
    getOffers()
  }, [])
  
  const getOffers = async() => {
    try {
      const querySnapshot = await getDocs(collection(Database, "offers"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    } catch (error) {
      console.log('Error reading offers: ', error)
    }
  }

  const addOffer = async() => {
    try {
      const docRef = await addDoc(collection(Database, 'offers'), {
        destino: 'Santa Marta',
        fecha: 'Julio 2023',
        acomodacion: 'triple',
        precio: 25700000,
        adicionales: ['Vuelta a la isla', 'Catamaran']
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <>
    <Flex
      alignItems="center"
      justifyContent="space-between"
      mt="8"
      mb="8"
      >
      <Heading
        color="brand.green"
        mb="4">Lista de ofertas</Heading>
      <Button
        colorScheme="green"
        onClick={addOffer}
        >Agregar oferta</Button>
    </Flex>
    
    <Flex flexDirection="row">
      { offersList.map((d, i) => <OfferItem key={i.toString()}/>)}
    </Flex>
    </>
  )
}
