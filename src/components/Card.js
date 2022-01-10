import { Box, Image, Link, Text, Wrap, WrapItem, Badge, useColorModeValue } from '@chakra-ui/react';

function Card({ image }) {
  const { likes, downloads } = image;
  const tags = image.tags.split(',');

  return (
    <Box
      maxW={'300px'}
      bg={useColorModeValue('white', 'gray.700')}
      boxShadow={'2xl'}
      rounded={'md'}
    >
      <Link href={image.pageURL} target="_blank" rel="noreferrer">
        <Image boxSize="300px" objectFit="cover" src={image.previewURL} alt={image.tags} />
      </Link>

      <Box p={3}>
        <Text>By {image.user}</Text>
        <Text
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="xs"
          textTransform="uppercase"
          mt={0}
        >
          {likes.toLocaleString()} Likes &bull; {downloads.toLocaleString()} Downloads
        </Text>
        <Wrap justify="left" mt={4}>
          {tags.map((tag) => {
            return (
              <WrapItem key={tag}>
                <Badge px={2} py={1} fontWeight={'400'}>
                  #{tag}
                </Badge>
              </WrapItem>
            );
          })}
        </Wrap>
      </Box>
    </Box>
  );
}

export default Card;
