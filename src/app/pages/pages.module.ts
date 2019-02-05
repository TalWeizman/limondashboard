
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NbSidebarModule, NbLayoutModule, NbSidebarService,NbListModule,NbUserModule,NbMenuModule,NbCardModule } from '@nebular/theme';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { AppRoutingModule } from '../app-routing.module';
import { ChartsModule } from 'ng2-charts';
import { PaymentItemComponent } from '../components/payment-item/payment-item.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    ForgetPasswordComponent,
    PaymentItemComponent
  ],
  imports: [
    MatToolbarModule,
    NbSidebarModule,
    NbLayoutModule,
    NbMenuModule,
    AppRoutingModule,
    NbCardModule,
    ChartsModule,
    NbListModule,
    NbUserModule
  ],
  providers: [NbSidebarService],
})
export class PagesModule { }
