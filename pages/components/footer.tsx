import { Flex, Text} from '@chakra-ui/react'; 

const Footer = () => { 
  const date = new Date();

  return (
    <Flex justifyContent={'center'} py={2} alignItems={'center'} mt={16}>
      <Text>Tahun: {date.getUTCFullYear()}, Bulan ke: {date.getUTCMonth() + 1}</Text>
    </Flex>
  )
}

export default Footer; 
