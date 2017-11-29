let store = {drivers: [], passengers: [], trips: []}

let driverId = 0

class Driver {
  constructor (name, passenger, trip) {
    this.id = ++driverId;
    this.name = name;
    this.passenger = passenger;

    store.drivers.push(this);
  }
  trips(){
    return store.trips.filter(trip => {
      return trip.driverId === this.id
    })
  }
  passengers(){
    return store.passengers.filter(passenger => {
      return passenger.driverId === this.id
    })
  }
}


let passengerId = 0

class Passenger {
  constructor (name, driver, trip) {
  this.id = ++passengerId;
  this.name = name;
  
  store.passengers.push(this);
  }
  trips(){
    return store.trips.filter(trip => {
      return trip.passengerId === this.id
    })
  }
  drivers(){
    return store.drivers.filter(driver => {
      return driver.passengerId === this.id
    })
  }
}

let tripId = 0

class Trip {
  constructor (driver, passenger) {
    this.id = ++tripId;
    this.driver = driver;
    this.driverId = driver.id;
    this.passenger = passenger;
    this.passengerId = passenger.id;
    store.trips.push(this);
  }
}
