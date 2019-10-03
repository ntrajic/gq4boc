import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TripComponent } from './trip/trip.component';
import { TripsComponent } from './trips/trips.component';


const routes: Routes = [
  { path: '', component: TripsComponent },
  { path: 'trip/:id', component: TripComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
