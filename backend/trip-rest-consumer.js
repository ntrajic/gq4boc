const { RESTDataSource } = require('apollo-datasource-rest');

class TripAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:3000/api';
  }

  async getTrips() {
    // HTTP GET http://localhost:3000/api/trips
    const response = await this.get('trips');
    return Array.isArray(response) ? response.map(trip => this.tripReducer(trip)) : [];
  }

  async getTrip({ id }) {
    // HTTP GET http://localhost:3000/api/trips/id
    const response = await this.get(`trips/${id}`);
    return this.tripReducer(response[0]);
  }

  // "id":"20190825Galiano","tdest":"Galiano","tdate":"20190825","tlead":"David Cater",
  // "treport":"20190825GalianoTripReport.pdf" ,"tphotos":[{"imgfile":"01-Galiano.jpg"},
  // {"imgfile":"02-Galiano.jpg"},{"imgfile":"03-Galiano.jpg"},{"imgfile":"04-Galiano.jpg"},
  // {"imgfile":"05-Galiano.jpg"},{"imgfile":"06-Galiano.jpg"},{"imgfile":"07-Galiano.jpg"}]}

  async getImgs() {
    // HTTP GET http://localhost:3000/api/imgs
    const response = await this.get('imgs');
    return Array.isArray(response) ? response.map(img => this.tripReducer(createImageBitmap)) : [];
  }

  async getImgs({ id }) {
    // HTTP GET http://localhost:3000/api/imgs/id
    const response = await this.get(`imgs/${id}`);
    return this.tripReducer(response[0]);
  }

  tripReducer(trip) {
    return {
      id: trip.id,
      cursor: `${trip.id}`,
      tdest: trip.tdest,
      tdate: trip.tdate,
      tlead: trip.tlead,
      treport: trip.treport,
      tphotos: trip.tphotos
    }
  }
}

module.exports = TripAPI;
