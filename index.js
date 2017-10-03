let store = {drivers: [], passengers: [], trips: []}

let driverId = 0;

let passengerId = 0;

let tripId = 0;

class Driver {
  constructor(name){
    this.id = ++driverId
    this.name = name
    store.drivers.push(this)
  }
  passengers(){
    return store.passengers.filter(function(passenger){
      return passenger.tripId === this.tripId
    }.bind(this))
  }
  trips(){
    return store.trips.filter(function(trip){
      return trip.driverId === this.id
    }.bind(this))
  }
}

class Passenger {
  constructor(name, driver){
    this.id = ++passengerId
    this.name = name
    if(driver){
      this.driverId = driver.id
    }
    store.passengers.push(this)
  }
  setDriver(driver){
    this.driverId = driver.id
  }
  trips(){
    return store.trips.filter(function(trip){
      return trip.passengerId === this.id
    }.bind(this))
  }
  drivers(){
    return store.drivers.filter(function(driver){
      return driver.tripId === this.tripId
    }.bind(this))
  }

}

class Trip {
  constructor(driver, passenger){
    this.id = ++tripId
    if (driver){
      this.driverId = driver.id
    }
    if (passenger){
      this.passengerId = passenger.id
    }
    store.trips.push(this)
  }
  passenger(){
    return store.passengers.find(function(passenger) {
      return passenger.id === this.passengerId
    }.bind(this))
  }
  driver(){
    return store.drivers.find(function(driver) {
      return driver.id === this.driverId
    }.bind(this))
  }
}
