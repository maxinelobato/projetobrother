import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';

export function RecadastramentoDigital() {
  return (
    <>
      <Box bgColor={'#002959'} minH={'100vh'}>
        <Container maxW={'7xl'}>
          <Stack spacing={12} p={4}>
            <Heading textAlign={'center'}>Notícias SEGEF</Heading>
            <Flex gap={4} direction={{ base: 'column', md: 'row' }}>
              <Box justifyContent={'center'} mt={12} mb={10}>
                <Heading
                  as={'h1'}
                  size={'3xl'}
                  fontWeight={600}
                  textAlign={{ base: 'center', md: 'left' }}
                >
                  Credenciamento e recadastramento digital, {''}
                  <Text as={'span'} color={'#FC8181'}>
                    plataforma digital de gestão tributária de Ananindeua-PA
                  </Text>
                </Heading>
                <Stack mt={6} direction={{ base: 'column', md: 'row' }}>
                  <Button
                    color={'blackAlpha.800'}
                    rounded={'full'}
                    size={'lg'}
                    variant="solid"
                    bgColor={'#FC8181'}
                    _hover={{ bgColor: 'whiteAlpha.800', transition: '0.3s' }}
                  >
                    Acesse Aqui
                  </Button>
                </Stack>
              </Box>
              <Box>
                <Card
                  overflow="hidden"
                  variant="elevated"
                  bgColor={'#0185C6'}
                  borderRadius="2xl"
                >
                  <Image
                    objectFit="cover"
                    maxW={{ base: '100%', sm: '600px' }}
                    src="/img/qrcode.png"
                    alt="SEGEF"
                  />
                </Card>
              </Box>
            </Flex>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
