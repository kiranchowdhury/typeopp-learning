import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingContainerComponent } from './training-container/training-container.component';
import { TrainingRoutingModule } from '@app/training/training-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TrainingRoutingModule
  ],
  declarations: [TrainingContainerComponent]
})
export class TrainingModule { }
