import Head from 'next/head'
import {Box, Card, CardContent, Typography} from "@mui/material";
import {useEffect, useState} from "react";

export default function Home() {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  if (!domLoaded) return null;

  document.body.setAttribute('style', 'background: #F0F0F0');

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main>
        <Box sx={{ml: 2}}>
          <Typography variant='h2'>SEG4105 Project Resources</Typography>
          <Typography variant='h4' sx={{mb: 2}}>Shipi - Same Day Shipping App</Typography>
          <Card sx={{width: 'max-content'}}>
            <CardContent>
              <Typography variant='h5'>Project Architecture</Typography>
              <img src='/assets/architecture.png' alt='Project Architecture'/>
            </CardContent>
          </Card>
        </Box>
      </main>
    </div>
  )
}
