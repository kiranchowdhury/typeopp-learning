import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainingContainerComponent } from '@app/training/training-container/training-container.component';

const routes: Routes = [
  {
    path: '',
    component: TrainingContainerComponent,
    children: []
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule {}
