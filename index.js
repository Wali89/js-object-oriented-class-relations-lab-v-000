let store = {drivers: [], passenger: [], trips: []}

let driverId = 0

class Driver {
  constructor (name, passenger) {
    this.id = ++driverId;
    this.name = name;
    this.passenger = passenger
    store.drivers.push(this);
  }
  trips(){
    return store.trips.filter(trip => {
      return trip.id === this.id
    })
  }
}


let passengerId = 0

class Passenger {
  constructor ()
}
