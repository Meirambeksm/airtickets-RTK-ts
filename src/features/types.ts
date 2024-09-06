export interface FligthTime {
  start: string;
  end: string;
}

export interface FlightTransit {
  value: number;
  name: string;
}

export interface Flight {
  id: number;
  company: string;
  logo: string;
  from: string;
  to: string;
  price: number;
  currency: string;
  time: FligthTime;
  duration: number;
  transit: FlightTransit;
}
