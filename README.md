# Calculator API

A simple Calculator API built with Express and TypeScript. This API provides basic arithmetic operations and includes Swagger documentation.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Swagger Documentation](#swagger-documentation)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/Caiuzu/calculator-api.git
   ```
   ```sh
   cd calculator-api
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following content:

   ```env
   PORT=4000
   ```

4. **Build the project:**

   ```sh
   npm run build
   ```

5. **Run the development server:**

   ```sh
   npm run dev
   ```

## Usage

Once the server is running, you can use tools like Postman or cURL to interact with the API.

### Endpoints

- **Add Two Numbers**

  - **URL:** `/add`
  - **Method:** `POST`
  - **Request Body:**
    ```json
    {
      "a": 5,
      "b": 3
    }
    ```
  - **Response:**
    ```json
    {
      "result": 8
    }
    ```

- **Subtract Two Numbers**

  - **URL:** `/subtract`
  - **Method:** `POST`
  - **Request Body:**
    ```json
    {
      "a": 5,
      "b": 3
    }
    ```
  - **Response:**
    ```json
    {
      "result": 2
    }
    ```

- **Multiply Two Numbers**

  - **URL:** `/multiply`
  - **Method:** `POST`
  - **Request Body:**
    ```json
    {
      "a": 5,
      "b": 3
    }
    ```
  - **Response:**
    ```json
    {
      "result": 15
    }
    ```

- **Divide Two Numbers**

  - **URL:** `/divide`
  - **Method:** `POST`
  - **Request Body:**
    ```json
    {
      "a": 6,
      "b": 3
    }
    ```
  - **Response:**
    ```json
    {
      "result": 2
    }
    ```

## Swagger Documentation

Swagger documentation is available at `/api-docs`. Once the server is running, you can access the documentation at:

```
http://localhost:4000/api-docs
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
