const { paginateResults } = require('./utils');

module.exports = {
  Query: {
    trips: (_, __, { dataSources }) => dataSources.tripAPI.getTrips(),
    trip: (_, { id }, { dataSources }) => dataSources.tripAPI.getTrip({ id }),
    imgs: (_, __, { dataSources }) => dataSources.tripAPI.getImgs(),
    img: (_, { id }, { dataSources }) => dataSources.tripAPI.getImg({ id })
  }
};

/* // pagination, after - is size of cursor, number of items in cursor to show per page; see change in schema.js, too
trips: async (_, { pageSize = 10, after }, { dataSources }) => {
      const allTrips = await dataSources.tripAPI.getTrips();

      const trips = paginateResults({
        after,
        pageSize,
        results: allTrips
      });

      return {
        trips,
        cursor: trips.length ? trips[trips.length - 1].cursor : null,
        hasMore: trips.length ? trips[trips.length - 1].cursor !== allTrips[allTrips.length - 1].cursor : false
      }
    },
*/
