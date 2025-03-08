import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'AstroWheel API',
      version: '1.0.0'
    }
  },
  apis: ['./src/routes/api/*.ts']
};

export const swaggerSpec = swaggerJsdoc(options);
