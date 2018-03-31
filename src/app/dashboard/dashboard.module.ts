import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '@app/shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardService } from './dashboard.service';
import { StoreModule } from '@ngrx/store';
import { dashboaedReducer } from './dashboard.reducer';
import { EffectsModule } from '@ngrx/effects';
import { DashboardEffects } from './dashboard.effects';
import { QuotePanelComponent } from './quote-panel/quote-panel.component';
import { ExpiryQuotePanelComponent } from './expiry-quote-panel/expiry-quote-panel.component';
import { NewsPanelComponent } from './news-panel/news-panel.component';

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    StoreModule.forFeature('dashboard', dashboaedReducer),
    EffectsModule.forFeature([DashboardEffects])
  ],
  declarations: [DashboardComponent, QuotePanelComponent, ExpiryQuotePanelComponent, NewsPanelComponent],
  providers: [DashboardService]
})
export class DashboardModule { }
