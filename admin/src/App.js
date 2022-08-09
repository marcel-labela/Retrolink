import { ChakraProvider } from '@chakra-ui/react'
import { AuthenticationProvider } from './customHooks/useAuthentication';

import { Main } from './Main';

// Hier komen alle providers en contexten.
const App = () => {
  return (
    <ChakraProvider>
      <AuthenticationProvider>
        <Main />
      </AuthenticationProvider>
    </ChakraProvider>
  )
};

export default App;
