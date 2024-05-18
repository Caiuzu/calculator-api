import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Express on Vercel');
});

// Endpoint de soma
app.post('/add', (req: Request, res: Response) => {
  const { a, b } = req.body;
  if (typeof a !== 'number' || typeof b !== 'number') {
    return res.status(400).send('Both a and b should be numbers.');
  }
  const result = a + b;
  res.json({ result });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server ready on port ${PORT}.`);
});

export default app;
