import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { StockSelectorComponent } from './stock-selector/stock-selector.component';
import { FundamentalComponent } from './fundamental/fundamental.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { TechnicalComponent } from './technical/technical.component';
import { DecisionComponent } from './decision/decision.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
        {
          path : '',
          component : NavigationComponent,
          children : [
            {
              path : '',
              component: HomeComponent
            },
            {
              path : 'fundamental',
              component: FundamentalComponent,
            },
            {
              path : 'technical',
              component: TechnicalComponent
            },
            {
              path : 'selectstock',
              component: StockSelectorComponent
            },
            {
              path : 'decision',
              component: DecisionComponent,
              canActivate : [AuthGuard]
            },
            {
              path : 'about',
              component: AboutComponent
            }
          ]
        }
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
