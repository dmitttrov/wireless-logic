import { Component, Input } from '@angular/core';
import { Subscription } from '../../models/subscriptions';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent {
  @Input() headers: string[] = [];
  @Input() subscriptions: Subscription[] = [];
}
