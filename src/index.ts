import express, { Request, Response } from 'express';

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Express on Vercel');
});


app.post('/add', (req: Request, res: Response) => {
  const { a, b } = req.body;
  if (typeof a !== 'number' || typeof b !== 'number') {
    return res.status(400).send('Both a and b should be numbers.');
  }
  const result = a + b;
  res.json({ result });
});

app.post('/subtract', (req: Request, res: Response) => {
  const { a, b } = req.body;
  if (typeof a !== 'number' || typeof b !== 'number') {
    return res.status(400).send('Both a and b should be numbers.');
  }
  const result = a - b;
  res.json({ result });
});

app.post('/multiply', (req: Request, res: Response) => {
  const { a, b } = req.body;
  if (typeof a !== 'number' || typeof b !== 'number') {
    return res.status(400).send('Both a and b should be numbers.');
  }
  const result = a * b;
  res.json({ result });
});

app.post('/divide', (req: Request, res: Response) => {
  const { a, b } = req.body;
  if (typeof a !== 'number' || typeof b !== 'number') {
    return res.status(400).send('Both a and b should be numbers.');
  }
  if (b === 0) {
    return res.status(400).send('Division by zero is not allowed.');
  }
  const result = a / b;
  res.json({ result });
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server ready on port ${PORT}.`);
});

export default app;
