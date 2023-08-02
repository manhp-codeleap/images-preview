import { Box } from '@mui/material';
import React from 'react';
export default function ImageView({ url }: { url: string }) {
  // display the image with alt text url
  return (
    <Box border={1} borderColor={'black'} maxWidth={200} display={'flex'}>
      <img src={url} alt={url} width={'100%'}/>
    </Box>
  );
}
