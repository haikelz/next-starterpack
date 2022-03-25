import { Box, Flex, Button, useColorModeValue, Text, Stack, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box bg={useColorModeValue('white', 'gray.900')} px={4}>
        <Flex h={14} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
            <Text fontWeight='bold'>Anime</Text>
          </Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button> 
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default Header; 
