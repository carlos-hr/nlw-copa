import { Heading, Text, VStack } from 'native-base';
import { Header } from '../components/Header';
import Logo from '../assets/logo.svg';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export function FindPool() {
  return (
    <VStack flex={1} bgColor="gray.900">
      <Header title="Criar novo bolão" showBackButton />

      <VStack mt={8} mx={5} alignItems="center">
        <Heading
          fontFamily="heading"
          color="white"
          fontSize="xl"
          mb={8}
          textAlign="center"
        >
          Encontre um bolão através de seu código único
        </Heading>

        <Input mb={2} placeholder="Qual código do bolão?" />
        <Button title="Buscar bolão" />
      </VStack>
    </VStack>
  );
}
