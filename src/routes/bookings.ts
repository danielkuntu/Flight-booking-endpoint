import express from 'express';
import bodyParser from 'body-parser';
import { getBookings, getBookingById } from '../services/bookingService';

const router = express.Router();
const app = express();
app.use(bodyParser.json());

router.get('/', (_req, res) => {
    const bookings = getBookings();
    if (bookings !== null || bookings !== undefined) {
        res.json(bookings);
    } else {
        res.sendStatus(404);
    }
});

router.get('/:id', (req, res) => {
    const booking = getBookingById(Number(req.params.id));
    if (booking !== null || booking !== undefined) {
        res.json(booking);
    } else {
        res.sendStatus(404);
    }
});

export default router;