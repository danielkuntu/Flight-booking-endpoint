import express from 'express';
import bodyParser from 'body-parser';
import { getBookings, getBookingById } from '../services/bookingService';

const router = express.Router();
const app = express();
app.use(bodyParser.json());

router.get('/', (_req, res) => {
  const bookings = getBookings();
  if (bookings !== null) {
    res.json(bookings);
  } else {
    res.status(404).send('Bookings were not found!');
  }
});

router.get('/:id', (req, res) => {
  const booking = getBookingById(Number(req.params.id));
  if (booking !== null) {
    res.json(booking);
  } else {
    res.status(404).send(`Booking with an id ${req.params.id} was not found.`);
  }
});

export default router;