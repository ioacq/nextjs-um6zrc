import Head from 'next/head';
import styles from '../styles/Home.module.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Home() {
  const [json, setJson] = React.useState({});

  const loadJsonString = () => console.log('loading json');

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>J6W Coding Exam</h1>

        <div className={styles.grid}>
          <Card onClick={loadJsonString} sx={{ minWidth: 360, minHeight: 225 }}>
            <CardContent>
              <Typography variant="body2">
                Click me to load a json string
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ minWidth: 360, minHeight: 225 }}>
            <CardContent>
              <Typography variant="body2">
                Click me to load a random image
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              height="140"
              image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
          </Card>

          <a href="#" className={styles.card}>
            <p>Click me to enable the box on my right</p>
          </a>

          <a href="#" className={styles.card}>
            <p>Click me to reset all state</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://next.new" target="_blank" rel="noopener noreferrer">
          Created with&nbsp;<b>next.new</b>&nbsp;⚡️
        </a>
      </footer>
    </div>
  );
}
