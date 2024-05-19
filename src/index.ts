import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';

dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 4000;

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Calculator API',
      version: '1.0.0',
      description: 'A simple API for arithmetic operations'
    },
    servers: [
      {
        url: 'https://calculator-api-pi.vercel.app/',
        description: 'Production server'
      },
      {
        url: `http://localhost:${PORT}`,
        description: 'Local server'
      }
    ]
  },
  apis: ['./dist/**/*.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

const options: swaggerUi.SwaggerUiOptions = {
  customCss:
        '.swagger-ui .opblock .opblock-summary-path-description-wrapper { align-items: center; display: flex; flex-wrap: wrap; gap: 0 10px; padding: 0 10px; width: 100%; }',
  customCssUrl: 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.3.0/swagger-ui.min.css',
};

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs, options));


app.get('/', (req: Request, res: Response) => {
  res.redirect('/api-docs');
});

/**
 * @swagger
 * /add:
 *   post:
 *     summary: Add two numbers
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               a:
 *                 type: number
 *               b:
 *                 type: number
 *     responses:
 *       200:
 *         description: The result of the addition
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: number
 */
app.post('/add', (req: Request, res: Response) => {
  const { a, b } = req.body;
  if (typeof a !== 'number' || typeof b !== 'number') {
    return res.status(400).send('Both a and b should be numbers.');
  }
  const result = a + b;
  res.json({ result });
});

/**
 * @swagger
 * /subtract:
 *   post:
 *     summary: Subtract two numbers
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               a:
 *                 type: number
 *               b:
 *                 type: number
 *     responses:
 *       200:
 *         description: The result of the subtraction
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: number
 */
app.post('/subtract', (req: Request, res: Response) => {
  const { a, b } = req.body;
  if (typeof a !== 'number' || typeof b !== 'number') {
    return res.status(400).send('Both a and b should be numbers.');
  }
  const result = a - b;
  res.json({ result });
});

/**
 * @swagger
 * /multiply:
 *   post:
 *     summary: Multiply two numbers
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               a:
 *                 type: number
 *               b:
 *                 type: number
 *     responses:
 *       200:
 *         description: The result of the multiplication
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: number
 */
app.post('/multiply', (req: Request, res: Response) => {
  const { a, b } = req.body;
  if (typeof a !== 'number' || typeof b !== 'number') {
    return res.status(400).send('Both a and b should be numbers.');
  }
  const result = a * b;
  res.json({ result });
});

/**
 * @swagger
 * /divide:
 *   post:
 *     summary: Divide two numbers
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               a:
 *                 type: number
 *               b:
 *                 type: number
 *     responses:
 *       200:
 *         description: The result of the division
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: number
 */
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

app.listen(PORT, () => {
  console.log(`Server ready on port ${PORT}.`);
});

export default app;
