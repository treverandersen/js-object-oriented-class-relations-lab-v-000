let driverId = 0
let passengerId = 0
let tripId = 0
let store = {drivers: [], passengers: [], trips: []}

class Driver {
  constructor(name) {
    this.id = ++driverId
    this.name = name
    store.drivers.push(this)
  }
  trips(){
    return store.trips.filter(trip => trip.driverId === this.id)
  }
  passengers() {
    return store.passengers
  }
}


class Passenger {
  constructor(name) {
    this.id = ++passengerId
    this.name = name
    store.passengers.push(this)
  }
  trips() {
    return store.trips.filter(trip => trip.passengerId === this.id)
  }
  drivers() {
    return store.drivers
  }
}

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId
    if(driver) {
      this.driverId = driver.id
    }
    if(passenger) {
      this.passengerId = passenger.id
    }
    store.trips.push(this)
  }
  driver() {
    return store.drivers[0]
  }
  passenger() {
    return store.passengers[0]
  }
}
