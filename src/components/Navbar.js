import { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  useColorModeValue,
  useColorMode,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, SearchIcon } from '@chakra-ui/icons';

export default function Nav({ searchTerm }) {
  const [text, setText] = useState('');
  const { colorMode, toggleColorMode } = useColorMode();

  const onSubmit = (e) => {
    e.preventDefault();
    searchTerm(text);
  };

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} mb={8}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Heading size="md" pr={2}>
          Pixabay Gallery
        </Heading>

        <Flex as={'form'} onSubmit={onSubmit} pr={4} width={'50%'}>
          <InputGroup>
            <Input
              bg={useColorModeValue('white', 'gray.700')}
              onChange={(e) => setText(e.target.value)}
              placeholder={'Search'}
              aria-label={'Search'}
            />
            <InputRightElement onClick={onSubmit} style={{ cursor: 'pointer' }}>
              <SearchIcon name="search" />
            </InputRightElement>
          </InputGroup>
        </Flex>

        <Button onClick={toggleColorMode}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Flex>
    </Box>
  );
}
