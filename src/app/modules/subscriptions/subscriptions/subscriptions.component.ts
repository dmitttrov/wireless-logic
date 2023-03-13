import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Subscription } from '../../../shared/models/subscriptions';
import { DnsSystemService } from '../../../shared/services/dns-system.service';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css'],
})
export class SubscriptionsComponent {
  headers = ['Option', 'Description', 'Price', 'Discount'];
  subscriptions$: Observable<Subscription[]> = this.getSubscriptions();

  constructor(private dnsSystemService: DnsSystemService) {}

  getSubscriptions(): Observable<Subscription[]> {
    return this.dnsSystemService.getSubscriptions();
  }
}
