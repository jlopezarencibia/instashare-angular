import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FeatherModule } from 'angular-feather';

@NgModule({
  declarations: [HomeComponent],
  imports: [SharedModule, HomeRoutingModule, FeatherModule]
})
export class HomeModule {}
