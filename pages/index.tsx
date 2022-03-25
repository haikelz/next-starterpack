import { Box, Flex, Heading } from '@chakra-ui/react';
import Header from '@/pages/components/header';
import Footer from '@/pages/components/footer';
import Section from '@/pages/section';
import Link from 'next/link';

const Index = () => {
  return (
    <Box>
      <Header />
      <Flex flexDirection={'column'} justifyContent={'center'} alignItems={'center'} mt={10}>
        <Heading textAlign={'center'} fontSize={17}>NextJS Starterpack. <u><Link href={'/nextpage'} passHref>NextPage</Link></u></Heading>
      </Flex>
      <Section />
      <Footer />
    </Box>
  )
}

export default Index; 
