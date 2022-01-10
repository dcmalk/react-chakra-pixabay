import { Wrap, WrapItem } from '@chakra-ui/react';
import Card from './Card';

function Gallery({ images }) {
  return (
    <Wrap justify="center" spacing="30px">
      {images.map((image) => {
        return (
          <WrapItem key={image.id}>
            <Card image={image} />
          </WrapItem>
        );
      })}
    </Wrap>
  );
}

export default Gallery;
