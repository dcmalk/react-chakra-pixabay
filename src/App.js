import { useState, useEffect, useCallback } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import theme from './theme';

function App() {
  const [term, setTerm] = useState('');
  const [image, setImages] = useState([]);

  const fetchImages = useCallback(async () => {
    const response = await fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo`
    );
    const data = await response.json();
    setImages(data.hits);
  }, [term]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  return (
    <ChakraProvider theme={theme}>
      <Navbar searchTerm={(searchText) => setTerm(searchText)} />
      <Gallery images={image} />
    </ChakraProvider>
  );
}

export default App;
