import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Express on Vercel');
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server ready on port ${PORT}.`);
});

export default app;
