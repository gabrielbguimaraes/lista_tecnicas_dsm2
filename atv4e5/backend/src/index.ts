import express, { Application } from 'express';
import cors from 'cors';
import router from './routes/router';

const app: Application = express();
const port = process.env.PORT || 3001;


app.use(cors({
  origin: 'http://localhost:3000',
}));

app.use(express.json());


app.use('/api', router);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
