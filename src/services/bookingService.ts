import testData from '../../testData.json';

import { Booking, Bookings } from '../models/types';
import { deduceBookingData } from '../helpers/helpers';
import { ensure } from '../utils/utils';

const bookingData = testData;
const bookings: Array<Booking> = testData.bookings;

export function getBookingById(id: number): Bookings[] | null {
  try {
    const bookingById: Bookings[] = ensure(deduceBookingData(bookingData, bookings, id));
    return bookingById;
  } catch (TypeError) {
    console.log(`Booking id: ${id} not found.`);
    return null;
  }
}

export function getBookings(): Bookings[] | null {
  try {
    const allBookings: Bookings[] = ensure(deduceBookingData(bookingData, bookings));
    return allBookings;
  } catch (TypeError) {
    console.log('Bookings were not found!');
    return null;
  }
}