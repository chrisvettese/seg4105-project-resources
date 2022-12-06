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

  return (<div>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico"/>
    </Head>

    <main>
      <Box sx={{ml: 2}}>
        <img src='assets/logo.png' alt='Shipi Logo' style={{height: 100}}/>
        <Typography variant='h2'>SEG4105 Project Resources</Typography>
        <Typography variant='h4' sx={{mb: 2}}>Shipi - Same Day Shipping App</Typography>
        <Card sx={{width: 'max-content', maxWidth: '60%', mb: 5}}>
          <CardContent>
            <Typography variant='h5'>Project Architecture</Typography>
            <Typography>This diagram shows Shipi's project architecture. There are three frontend applications; a
              driver app, a merchant website, and an admin panel website. These interact with 6 microservices through
              a gateway. We primarily use GraphQL, but use REST APIs when needed, such as for multipart file uploads,
              and authentication endpoints.</Typography>
            <img src='assets/architecture.png' alt='Project Architecture' style={{width: '95%'}}/>
          </CardContent>
        </Card>
        <Card sx={{width: 'max-content', maxWidth: '60%', mb: 5}}>
          <CardContent>
            <Typography variant='h5'>Driver-Shipment Matching Algorithm</Typography>
            <Typography>The sequence diagram below shows the API calls involved in the driver-shipment matching
              algorithm. The algorithm takes place in a few steps. First, a shipment is created and marked as "open",
              meaning it is waiting to be assigned to a driver. Next, when a driver starts searching for a shipment to
              pick up, the algorithm searches if there exists a shipment within a reasonable distance for the driver.
              If there is, the shipment and driver are added to a batch (which is a group of nearby shipments and
              drivers). If no nearby batch exists, a new one is created. Once the batch reaches 100 shipments and
              drivers each, or 30 seconds have passed, the stable matching algorithm is performed on the drivers and
              shipments in the batch. This algorithm attempts to match each shipment with the best possible driver.
              The shipment's needs are given priority over drivers to ensure a good customer experience. Once the
              algorithm concludes, the shipments are assigned to drivers, and these drivers are given an offer to pick
              up the shipments. If they reject the offer, the algorithm repeats, while excluding that specific
              shipment.</Typography>
            <img src='assets/sequence.png' alt='Sequence Diagram' style={{width: '95%'}}/>
          </CardContent>
        </Card>
        <Card sx={{width: 'max-content', maxWidth: '60%', mb: 5}}>
          <CardContent>
            <Typography variant="h5">Entity Relationship Diagram</Typography>
            <Typography>Our ER diagram shows how the tables in the database are structured. Our database is
              CockroachDB, which is a distributed variant of Postgres. This allows the database to automatically scale
              horizontally as demand and storage requirements increase. Transactions are still supported by
              CockroachDB, guaranteeing integrity of the data.</Typography>
            <img src='assets/er.png' alt='Sequence Diagram' style={{width: '95%'}}/>
          </CardContent>
        </Card>
        <Card sx={{width: 'max-content', maxWidth: '60%', mb: 2}}>
          <CardContent>
            <Typography variant="h5">Class Diagram</Typography>
            <Typography>The class diagram shows the various components of the system, divided into classes. For example,
              merchants can create a Store, which has one Address, and multiple of Employee and Shipment. A Driver has
              one or more Transport, which represents the transportation methods they can use to pick up and drop off
              shipments.</Typography>
            <img src='assets/class_diagram.png' alt='Class Diagram' style={{width: '95%'}}/>
          </CardContent>
        </Card>
      </Box>
    </main>
  </div>)
}
