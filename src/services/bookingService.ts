import bookingData from '../../testData.json';
import { Booking, Bookings, Passenger } from '../types';

const bookings: Array<Booking> = bookingData.bookings;

export function getBookingById(id: number): Booking | null {
    const booking: Booking = ensure(bookings.find(booking => booking.id === id));
    if(booking !== null || booking !== undefined){
        return booking;
    } else {
        return null;
    }
};

export function getBookings(): Bookings | any {
   let id: number | undefined;
   let passengerId: number;
   let flightId: string;
   const allBookings: Bookings[] = [];

   for (let booking of bookings) {
        id = booking.id;
        passengerId = booking.passengerId;
        flightId = booking.flightId;
        const pax: Passenger = ensure(bookingData.passengers.find(pax => pax.id === passengerId));
        const paxFormatted = (({firstName, lastName, email}) => ({ firstName, lastName, email}))(pax);
        const flights: any[] = bookingData.flights.filter(el => el.id === flightId)
            .map(flight => (({departure, arrival, departureDate, arrivalDate}) =>
            ({departure, arrival, departureDate, arrivalDate}))(flight));
        
        const formattedBooking: Bookings = {
            id: id,
            passenger: paxFormatted,
            flights: flights,
        }
        allBookings.push(formattedBooking);
   }
    return allBookings;
};

function ensure<T>(argument: T | undefined |null, message: string = 'Not found.'): T {
    if (argument === undefined || argument === null) {
        throw new TypeError(message);
    }
    return argument;
}
