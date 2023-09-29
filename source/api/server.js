import express from 'express';
import indexRoutes from './routes/index.routes.js';

const app = express();
const port = 3103;

app.use(indexRoutes);

app.listen(port, () => {
    console.log(`server on port: http://localhost:${port}`);
})