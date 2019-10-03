import { Component, OnInit, OnDestroy } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs';
import gql from 'graphql-tag';

const query = gql`
{
  trips {
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
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})

export class TripsComponent implements OnInit, OnDestroy {
  trips: any[] = [];
  loading: boolean;
  private querySub: Subscription;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.querySub = this.apollo.watchQuery({
      query
    })
    .valueChanges
    .subscribe(({ data, loading }) => {
      this.loading = loading;
      this.trips = data['trips'];
    });
  }

  ngOnDestroy() {
    this.querySub.unsubscribe();
  }
}
