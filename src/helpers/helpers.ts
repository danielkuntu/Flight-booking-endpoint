import { ensure } from '../utils/utils';
import { Booking, Bookings, Flight, Passenger } from '../models/types';

export function deduceBookingData(bookingData: any, bookings: Booking[], fetchById?: number): Bookings[] {
  const allBookings: Bookings[] = [];

  for(const booking of bookings) {
    const pax: Passenger = ensure(bookingData.passengers.find((pax: { id: number; }) => pax.id === booking.passengerId));
    console.log('pax: ', pax);
    const paxFormatted = (({ firstName, lastName, email }) => ({ firstName, lastName, email }))(pax);
    const flights: Flight[] = bookingData.flights.filter((el: { id: string; }) => el.id === booking.flightId)
      .map((flight: Flight) => (({ departure, arrival, departureDate, arrivalDate }) =>
        ({ departure, arrival, departureDate, arrivalDate }))(flight)) as Flight[];
    const formattedBooking: Bookings = {
      id: booking.id,
      passenger: paxFormatted,
      flights: flights
    };
    allBookings.push(formattedBooking);
  }
  if(fetchById) {
    return ensure(allBookings.filter(allBookings => allBookings.id === fetchById));
  }
  return allBookings;
}