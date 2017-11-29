let store = {drivers: [], passenger: [], trips: []}

let driverId = 0

class Driver {
  constructor (name) {
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
  constructor (name){
  this.id = ++passengerId;
  this.name = name;
  }
}
