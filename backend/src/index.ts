import express from 'express';
import taskRouter from './presentation/routes/task';
const app = express();
import connectDb from './infra/mongodb/connection';

connectDb();

app.use(express.json());
app.use('/api/tasks', taskRouter);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`servidor rodando na porta ${PORT}`);
});