let store = {drivers: [], passenger: []}
class Driver {
  constructor (name) {
//check to see how id is added to object with out taking ID
    this.name = name;
    store.drivers.push(this);
  }
}
