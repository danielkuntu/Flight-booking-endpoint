import express from 'express';
import bodyParser from 'body-parser';
import bookingRouter from './src/controllers/bookings';

const app = express();
app.use(bodyParser.json());

app.use('/api/v1/bookings', bookingRouter);

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
