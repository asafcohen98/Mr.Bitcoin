
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {GoogleChartsModule} from 'angular-google-charts'
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { StatisticsPageComponent } from './pages/statistics-page/statistics-page.component';
import { ChartComponent } from './cmps/chart/chart.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { TransferFundComponent } from './cmps/transfer-fund/transfer-fund.component';
import { MovesListComponent } from './cmps/moves-list/moves-list.component';
import { LoaderComponent } from './cmps/loader/loader.component';
import { HamburgerMenuComponent } from './cmps/hamburger-menu/hamburger-menu.component';
import { ChartValuesPipe } from './pipes/chart-values.pipe'


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AppHeaderComponent,
    ContactPageComponent,
    ContactListComponent,
    ContactPreviewComponent,
    ContactDetailsComponent,
    ContactFilterComponent,
    StatisticsPageComponent,
    ChartComponent,
    ContactEditComponent,
    SignupPageComponent,
    TransferFundComponent,
    MovesListComponent,
    LoaderComponent,
    HamburgerMenuComponent,
    ChartValuesPipe,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    GoogleChartsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
