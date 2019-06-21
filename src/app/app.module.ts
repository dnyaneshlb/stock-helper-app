import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatInputModule,
    MatCheckboxModule,
    MatGridListModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatTooltipModule,
    MatStepperModule,
    MatBadgeModule,
    MatSnackBarModule,
    MatDialogModule
  } from '@angular/material';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FundamentalComponent } from './fundamental/fundamental.component';
import { TechnicalComponent } from './technical/technical.component';
import { StockSelectorComponent } from './stock-selector/stock-selector.component';
import { HomeComponent } from './home/home.component';
import { DecisionComponent } from './decision/decision.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { AppIntroComponent } from './app-intro/app-intro.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FundamentalComponent,
    TechnicalComponent,
    StockSelectorComponent,
    HomeComponent,
    DecisionComponent,
    FooterComponent,
    AboutComponent,
    AppIntroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCardModule, MatIconModule,
    MatListModule, MatSidenavModule, MatToolbarModule,
    MatSliderModule, MatTooltipModule, MatStepperModule,
    MatInputModule, MatSlideToggleModule, MatSnackBarModule,
    MatCheckboxModule, MatDialogModule, MatBadgeModule,
    MatGridListModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    LayoutModule,
    MatFormFieldModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent, AppIntroComponent]
})
export class AppModule { }
