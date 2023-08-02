import React from 'react';
import ImageView from './ImageView';
import { Box, Container } from '@mui/material';
// this will use the ImageView to display a list of images based on the input urls
// they will be displayed in a grid with max 5 images per row, add a margin of 5px between images
export default function ImagesViewer({ urls }: { urls: string[] }) {
  return (
    <Container>
      <Box
        display={'flex'}
        flexDirection={'row'}
        flexWrap={'wrap'}
        justifyContent={'space-between'}
      >
        {urls.map((url) => {
          return <ImageView url={url} key={url} />;
        })}
      </Box>
    </Container>
  );
}
