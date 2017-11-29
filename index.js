let store = {drivers: [], passenger: [], trips: []}

let driverId = 0

class Driver {
  constructor (name) {
    this.id = ++driverId;
    this.name = name;
    store.drivers.push(this);
  }
  trips(){
    return store.trips.filter(trip => {
      return trip.id === this.id
    })
  }
}


class Passenger {
  constructor ()
}
