import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlowCenterComponent } from './components/flow-center/flow-center.component';
import { FlowsComponent } from './components/flows/flows.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'flows', component: FlowsComponent },
  { path: 'flows/flowCenters', component: FlowCenterComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
