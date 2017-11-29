let store = {drivers: [], passengers: [], trips: []}

let driverId = 0

class Driver {
  constructor (name, passenger, trip) {
    this.id = ++driverId;
    this.name = name;
    store.drivers.push(this);
  }
  trips(){
    return store.trips.filter((trip) => {
      return trip.driverId === this.id
    })
  }
  passengers(){
    return this.trips().map((trip) => {
      return trip.passenger()
    })
  }
}


let passengerId = 0

class Passenger {
  constructor (name) {
  this.id = ++passengerId;
  this.name = name;
  this.driverId = [];
  store.passengers.push(this);
  }
  trips(){
    return store.trips.filter((trip) => {
      return trip.passengerId === this.id
    })
  }
  drivers(){
    return this.trips().map((trip) => {
      return trip.driver()
    })
  }
}

let tripId = 0

class Trip {
  constructor (driver, passenger) {
    this.id = ++tripId;
    this.driverId = driverId;
    this.passenger = passengerId;
    store.trips.push(this);
  }
  drivers(){
    return store.drivers.find((driver) => {
      return driver.tripId === this.id
    })
  }
  passengers(){
    return store.passengers.find((passenger) => {
      return passenger.tripId === this.id
    })
  }
}
