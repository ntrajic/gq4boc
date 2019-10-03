
# Query with pagination, basic/schema.js and resolvers.js need to be changed

{
 trips (pageSize: 5, after: "1") {
    hasMore
    cursor
    trips {
      tdate
      tdest
	  tlead
      treport
      tphotos
    }

 }
}
