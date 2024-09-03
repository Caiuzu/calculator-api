# Calculator API

A simple Calculator API built with Express and TypeScript. This API provides basic arithmetic operations and includes Swagger documentation.

### Índice

1. [Parte 1: Criando uma API Simples com Express e TypeScript](#parte-1-criando-uma-api-simples-com-express-e-typescript)
   - [Passo 1: Configuração Inicial](#passo-1-configuração-inicial)
   - [Passo 2: Instalar Dependências](#passo-2-instalar-dependências)
   - [Passo 3: Configurar o TypeScript](#passo-3-configurar-o-typescript)
   - [Passo 4: Estrutura do Projeto](#passo-4-estrutura-do-projeto)
   - [Passo 5: Criar o Servidor Express](#passo-5-criar-o-servidor-express)
   - [Passo 6: Configurar Scripts no `package.json`](#passo-6-configurar-scripts-no-packagejson)
   - [Passo 7: Compilar e Executar o Projeto](#passo-7-compilar-e-executar-o-projeto)
   - [Passo 8: Configurar o Deployment no Vercel](#passo-8-configurar-o-deployment-no-vercel)
   - [Conclusão da Parte 1](#conclusão-da-parte-1)

2. [Parte 2: Adicionando Documentação Swagger à API com Express e TypeScript](#parte-2-adicionando-documentação-swagger-à-api-com-express-e-typescript)
   - [Passo 1: Instalar Dependências](#passo-1-instalar-dependências-1)
   - [Passo 2: Configurar o Swagger](#passo-2-configurar-o-swagger)
   - [Explicação da Configuração do Swagger](#explicação-da-configuração-do-swagger)
   - [Compilar e Executar o Projeto](#compilar-e-executar-o-projeto)
   - [Reimplantar no Vercel](#reimplantar-no-vercel)
   - [Conclusão da Parte 2](#conclusão-da-parte-2)

---

### Parte 1: Criando uma API Simples com Express e TypeScript

### Passo 1: Configuração Inicial

1. **Crie um novo diretório para o seu projeto e navegue até ele:**

    ```sh
    mkdir calculator-api
    cd calculator-api
    ```

2. **Inicialize um novo projeto Node.js:**

    ```sh
    npm init -y
    ```

### Passo 2: Instalar Dependências

1. **Instale as dependências necessárias:**

    ```sh
    npm install express dotenv
    ```

    - `express`: Framework para criar servidores web.
    - `dotenv`: Carrega variáveis de ambiente a partir de um arquivo `.env`.

2. **Instale as dependências de desenvolvimento:**

    ```sh
    npm install --save-dev typescript ts-node @types/node @types/express nodemon rimraf copyfiles
    ```

    - `typescript`: Linguagem de programação que adiciona tipagem estática ao JavaScript.
    - `ts-node`: Executa arquivos TypeScript diretamente.
    - `@types/node` e `@types/express`: Tipos TypeScript para Node.js e Express.
    - `nodemon`: Ferramenta que reinicia automaticamente o servidor ao detectar mudanças nos arquivos.
    - `rimraf`: Ferramenta para deletar diretórios (útil para limpar a pasta de build).
    - `copyfiles`: Ferramenta para copiar arquivos durante o processo de build.

### Passo 3: Configurar o TypeScript

1. **Inicialize a configuração do TypeScript:**

    ```sh
    npx tsc --init
    ```

2. **Edite o arquivo `tsconfig.json` para configurar o compilador TypeScript:**

    ```json
    {
      "compilerOptions": {
        "target": "ES6",
        "module": "commonjs",
        "outDir": "./dist",
        "rootDir": "./src",
        "strict": true,
        "esModuleInterop": true,
        "resolveJsonModule": true
      },
      "include": ["src/**/*"]
    }
    ```

### Passo 4: Estrutura do Projeto

1. **Crie a estrutura de diretórios do projeto:**

    ```sh
    mkdir src
    touch src/index.ts .env .gitignore
    ```

2. **Configure o arquivo `.gitignore` para excluir arquivos desnecessários:**

    ```plaintext
    node_modules
    dist
    .env
    ```

3. **Configure o arquivo `.env` com a porta do servidor:**

    ```plaintext
    PORT=4000
    ```

### Passo 5: Criar o Servidor Express

1. **Edite o arquivo `src/index.ts` para configurar o servidor Express:**

    ```typescript
    import express, { Request, Response } from 'express';
    import dotenv from 'dotenv';

    dotenv.config();

    const app = express();
    app.use(express.json());

    const PORT = process.env.PORT || 4000;

    app.get('/', (req: Request, res: Response) => {
      res.send('Welcome to the Calculator API!');
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

    app.listen(PORT, () => {
      console.log(`Server ready on port ${PORT}.`);
    });

    export default app;
    ```

### Passo 6: Configurar Scripts no `package.json`

1. **Edite o arquivo `package.json` para incluir os scripts:**

    ```json
    {
      "name": "calculator-api",
      "version": "1.0.0",
      "description": "",
      "main": "index.ts",
      "scripts": {
        "clean": "rimraf dist",
        "build": "npm run clean && tsc",
        "dev": "npm run build && nodemon dist/index.js"
      },
      "keywords": [],
      "author": "",
      "license": "ISC",
      "dependencies": {
        "dotenv": "^16.4.5",
        "express": "^4.19.2"
      },
      "devDependencies": {
        "@types/express": "^4.17.21",
        "@types/node": "^20.12.12",
        "nodemon": "^3.1.0",
        "rimraf": "^5.0.7",
        "typescript": "^5.4.5",
        "copyfiles": "^2.4.1"
      }
    }
    ```

    - `clean`: Exclui a pasta `dist` antes de cada build.
    - `build`: Compila o projeto TypeScript.
    - `dev`: Compila o projeto e inicia o servidor usando `nodemon`.

### Passo 7: Compilar e Executar o Projeto

1. **Compile o projeto:**

    ```sh
    npm run build
    ```

2. **Execute o servidor de desenvolvimento:**

    ```sh
    npm run dev
    ```

### Passo 8: Configurar o Deployment no Vercel

1. **Instale a CLI do Vercel se ainda não tiver:**

    ```sh
    npm install -g vercel
    ```

2. **Faça login na Vercel:**

    ```sh
    vercel login
    ```

3. **Crie um arquivo `vercel.json` na raiz do projeto:**

    ```json
    {
      "version": 2,
      "builds": [
        {
          "src": "dist/index.js",
          "use": "@vercel/node"
        }
      ],
      "routes": [
        {
          "src": "/(.*)",
          "dest": "/dist/index.js"
        }
      ]
    }
    ```

    - `builds`: Define como construir o projeto para Vercel.
    - `routes`: Define as rot

as e destinos para os arquivos construídos.

4. **Implante o projeto na Vercel:**

    ```sh
    vercel --prod
    ```

    **Nota**: O comando `vercel --prod` garante que o projeto seja implantado na produção. O deployment via PR pode não refletir corretamente.
---

### Parte 2: Adicionando Documentação Swagger à API com Express e TypeScript

### Passo 1: Instalar Dependências

1. **Instale as dependências necessárias para o Swagger:**

    ```sh
    npm install swagger-ui-express swagger-jsdoc
    ```

2. **Instale as dependências de desenvolvimento para os tipos do Swagger:**

    ```sh
    npm install --save-dev @types/swagger-jsdoc @types/swagger-ui-express
    ```

### Passo 2: Configurar o Swagger

1. **Edite o arquivo `src/index.ts` para configurar o Swagger:**

    ```typescript
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
      customCss: '.swagger-ui .opblock .opblock-summary-path-description-wrapper { align-items: center; display: flex; flex-wrap: wrap; gap: 0 10px; padding: 0 10px; width: 100%; }',
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
    ```

### Explicação da Configuração do Swagger

Para solucionar o problema com o Swagger na Vercel, configuramos as opções do Swagger UI:

```typescript
const options: swaggerUi.SwaggerUiOptions = {
  customCss: '.swagger-ui .opblock .opblock-summary-path-description-wrapper { align-items: center; display: flex; flex-wrap: wrap; gap: 0 10px; padding: 0 10px; width: 100%; }',
  customCssUrl: 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.3.0/swagger-ui.min.css',
};
```

- `customCss`: Estilos personalizados para corrigir o problema de alinhamento dos endpoints no Swagger UI quando hospedado na Vercel.
- `customCssUrl`: Usamos uma URL CDN para carregar o CSS da versão 4.3.0 do Swagger UI, garantindo a compatibilidade e corrigindo possíveis problemas de estilo.

### Compilar e Executar o Projeto

1. **Compile o projeto:**

    ```sh
    npm run build
    ```

2. **Execute o servidor de desenvolvimento:**

    ```sh
    npm run dev
    ```

### Reimplantar no Vercel

1. **Reimplante o projeto na Vercel:**

    ```sh
    vercel --prod
    ```
