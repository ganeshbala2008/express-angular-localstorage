import userRouter from './api/controllers/user/router';

export default function routes(app) {
  app.use('/api/user', userRouter);
}
