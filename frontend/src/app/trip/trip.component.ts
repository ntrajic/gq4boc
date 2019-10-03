import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const getTrip = gql`
query getTrip($id: ID!) {
  trip(id: $id) {
    id
    tdest
    tdate
    tlead
    treport
    #tphotos
  }
}
`;

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {
  trip: any;
  id: any;

  constructor(private apollo: Apollo, private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });

    this.apollo.watchQuery({
      query: getTrip,
      variables: {
        id: this.id
      }
    }).valueChanges.subscribe((results: any) => {
      console.log(results);
      this.trip = results.data.trip;
    });
  }

  ngOnInit() {
  }

}
