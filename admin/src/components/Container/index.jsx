import { Stack, useColorModeValue } from '@chakra-ui/react';

export const Container = ({ children }) => {
  return (
    <Stack
      spacing={4}
      w={'full'}
      maxW={'md'}
      bg={useColorModeValue('white', 'gray.700')}
      rounded={'xl'}
      boxShadow={'lg'}
      p={6}
      my={12}>
        {children}
    </Stack>
  )
}