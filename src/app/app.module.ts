import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesModule } from './pages/pages.module';
import { NbThemeModule ,NbMenuModule} from '@nebular/theme';
import { NbSidebarModule, NbLayoutModule, NbSidebarService,NbListModule ,NbCardModule,NbActionsModule,NbTabsetModule,NbUserModule,NbContextMenuModule} from '@nebular/theme';
import {MatIconModule} from '@angular/material/icon';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    MenuItemComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PagesModule,
    ChartsModule,
    NbThemeModule.forRoot(),
    NbMenuModule.forRoot(),NbListModule,NbSidebarModule,NbCardModule, NbLayoutModule,NbActionsModule,NbTabsetModule,MatIconModule,NbUserModule,NbContextMenuModule
  ],
  providers: [NbSidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
