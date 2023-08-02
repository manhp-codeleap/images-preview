import React, { useCallback } from 'react';
import './App.css';
import { Box, Container, TextField } from '@mui/material';
import ImagesViewer from './components/ImagesViewer';

function splitUrls(urls: string): string[] {
  return urls
    .split('\n')
    .map((item) => item.trim())
    .filter((item) => item.length > 0);
}

function App() {
  const [urls, setUrls] = React.useState<string>(
    [
      'https://ieb-prd-output-images.s3.eu-central-1.amazonaws.com/Original/000011e4-cef0-4776-8aba-99eded672032.jpeg',
      'https://ieb-prd-output-images.s3.eu-central-1.amazonaws.com/Original/00002b0e-df36-4dd6-a08c-546151da53a3.jpeg',
      'https://ieb-prd-output-images.s3.eu-central-1.amazonaws.com/Original/00002b0e-df36-4dd6-a08c-546151da53a3.jpeg',
      'https://ieb-prd-output-images.s3.eu-central-1.amazonaws.com/Original/00002b0e-df36-4dd6-a08c-546151da53a3.jpeg',
      'https://ieb-prd-output-images.s3.eu-central-1.amazonaws.com/Original/00002b0e-df36-4dd6-a08c-546151da53a3.jpeg',
      'https://ieb-prd-output-images.s3.eu-central-1.amazonaws.com/Original/00002b0e-df36-4dd6-a08c-546151da53a3.jpeg',
      'https://ieb-prd-output-images.s3.eu-central-1.amazonaws.com/Original/00002b0e-df36-4dd6-a08c-546151da53a3.jpeg',
      'https://ieb-prd-output-images.s3.eu-central-1.amazonaws.com/Original/00002b0e-df36-4dd6-a08c-546151da53a3.jpeg',
      'https://ieb-prd-output-images.s3.eu-central-1.amazonaws.com/Original/00002b0e-df36-4dd6-a08c-546151da53a3.jpeg',
    ].join('\n')
  );
  const updateUrl = useCallback((e: any) => {
    setUrls(e?.target.value ?? '');
  }, []);
  // this view will contain a textbox with multiple line to input the list of urls which separated by new line
  // then we will display the list of images based on the input urls, we can use the MUI component Box and the ImagesViewer component
  return (
    <Container>
      <Box display={'flex'} flexDirection={'column'}>
        {/* urls component*/}
        <Box display={'flex'} flexDirection={'row'} mb={1}>
          <Box>Urls:</Box>
          <Box flexGrow={1}>
            <TextField multiline={true} value={urls} onChange={updateUrl} fullWidth/>
          </Box>
        </Box>
        <ImagesViewer urls={splitUrls(urls ?? '')} />
      </Box>
    </Container>
  );
}

export default App;
