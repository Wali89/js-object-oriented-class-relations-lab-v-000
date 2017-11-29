let store = {drivers: [], passengers: [], trips: []}

let driverId = 0

class Driver {
  constructor (name, passengers, trips) {
    this.id = ++driverId;
    this.name = name;
    this.passenger = passenger;
    if(passenger){
      this.passengerId = passenger.id;
    }
    if(trip){
      this.tripId = trip.id;
    }
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
  constructor (name, driver, trip) {
  this.id = ++passengerId;
  this.name = name;
  if(driver){
    this.driverId = driver.id;
  }
  if(trip){
    this.tripId = trip.id;
  }
  store.passengers.push(this);
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
