import Header from '@/pages/components/header';
import Footer from '@/pages/components/footer';
import { Box, Text, Button, Flex, Heading, Image } from '@chakra-ui/react';
import Link from 'next/link'; 

const NextPage = () => {
  return (
    <Box>
      <Header />
      <Flex justifyContent={'center'} alignItems={'center'} mt={10}>
        <Heading fontSize={17}>NextJS Starterpack</Heading>
      </Flex>

      <Flex flexDirection={'column'} mt={14} justifyContent={'center'} alignItems={'center'}>
        <Image w={80} src='not-found.svg' />
        <Text mt={10}>Ups, halaman yang anda tuju adalah halaman kedua.</Text>
        <Link href={'/'} passHref><Button mt={5}>Balik Kampung</Button></Link>
      </Flex>
      <Footer />
    </Box>

  )
}

export default NextPage; 
