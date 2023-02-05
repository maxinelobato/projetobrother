import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';

export function RecadastramentoDigital() {
  return (
    <>
      <Box bgColor={'#002959'}>
        <VStack p={4}>
          <Heading
            as={'h1'}
            size={['2xl', '3xl']}
            fontWeight={600}
            textAlign={{ base: 'center', md: 'left' }}
          >
            Notícias SEGEF
          </Heading>
        </VStack>
        <Stack minH={'90vh'} direction={{ base: 'column', md: 'row' }}>
          <Flex p={4} flex={1} align={'center'} justify={'center'}>
            <Stack spacing={6} w={'full'} maxW={'lg'}>
              <Heading
                as={'h1'}
                size={['2xl', '3xl']}
                fontWeight={600}
                textAlign={{ base: 'center', md: 'left' }}
              >
                Credenciamento e recadastramento digital, {''}
                <Text as={'span'} color={'#FC8181'}>
                  plataforma digital de gestão tributária de Ananindeua-PA
                </Text>
              </Heading>
              <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
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
            </Stack>
          </Flex>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}
            p={4}
          >
            <Box
              position={'relative'}
              rounded={'2xl'}
              boxShadow={'2xl'}
              overflow={'hidden'}
              bgColor={'#0185C6'}
              borderRadius="2xl"
            >
              <Image
                objectFit="cover"
                maxW={{ base: '100%', md: '600px' }}
                src="/img/qrcode.png"
                alt="SEGEF"
              />
            </Box>
          </Flex>
        </Stack>
      </Box>
    </>
  );
}
