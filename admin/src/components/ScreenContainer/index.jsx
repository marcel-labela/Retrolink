import { Flex, useColorModeValue, } from '@chakra-ui/react';

// @TODO find out which props you can use for this component.

export const ScreenContainer = ({ children, placement }) => {
  return (
    <Flex
      minH={'100vh'}
      align={placement}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      {children}
    </Flex>
  )
}