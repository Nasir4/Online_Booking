const Rental = require("../server/models/rental");
class FakeDb {
  constructor() {
    this.rentals = [
      {
        title: "Park Appartments",
        city: "Banglore",
        street: "Main cross street",
        category: "Appartments",
        image: "https://via.placeholder.com/350x250",
        bedroom: 3,
        description: "Nice Appartments",
        dailyRate: 34,
        shared: false
      },
      {
        title: "main Appartments",
        city: "Banglore",
        street: "mangola street",
        category: "Appartments",
        image: "https://via.placeholder.com/350x250",
        bedroom: 3,
        description: "decent Appartments",
        dailyRate: 34,
        shared: true
      },
      {
        title: "central Appartments",
        city: "Chennai",
        street: "Barga street",
        category: "Appartments",
        image: "https://via.placeholder.com/350x250",
        bedroom: 2,
        description: "Beach View Appartments",
        dailyRate: 38,
        shared: false
      }
    ];
  }

  pushRentalToDb() {
    this.rentals.forEach(rental => {
      const newRental = new Rental(rental);

      newRental.save();
    });
  }

  seedDb() {
    this.pushRentalToDb();
  }
}

module.exports = FakeDb;
