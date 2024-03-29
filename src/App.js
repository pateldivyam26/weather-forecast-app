import React from 'react';
import { Center } from '@chakra-ui/react';
import { Container } from '@chakra-ui/layout';
import Content from './components/Content';
import Header from './components/Header';

console.log(process.env.REACT_APP_WEATHER_API_KEY)

function App() {
  return (
    <Center minH="100vh">
      <Container maxW="xl" flexFlow="column">
        <Header />
        <Content />
      </Container>
    </Center>
  );
}

export default App;
