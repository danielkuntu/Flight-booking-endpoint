export type Airport = 'HEL' | 'JFK' | 'HKG' | 'LAX';

export type Flight = {
    departure: Airport;
    arrival: Airport;
    departureDate: string;
    arrivalDate: string;
}

export type Passenger = {
    id?: number;
    firstName: string;
    lastName: string;
    email: string;
}

export type Booking = {
    id?: number;
    passengerId: number;
    flightId: string;
}

export type Bookings = {
    id?: number,
    passenger: Passenger,
    flights: Flight[]
}

