import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { DataTableModule } from '../../shared/ui-components/data-table/data-table.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SubscriptionsComponent,
  },
];

@NgModule({
  declarations: [SubscriptionsComponent],
  imports: [CommonModule, DataTableModule, RouterModule.forChild(routes)],
})
export class SubscriptionsModule {}
