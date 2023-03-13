import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Subscription } from '../models/subscriptions';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DnsSystemService {
  constructor(private http: HttpClient) {}

  getSubscriptions(): Observable<Subscription[]> {
    return this.http
      .get<Subscription[]>(`${environment.apiUrl}/subscriptions`)
      .pipe(map((subscriptions) => this.sortSubscriptions(subscriptions)));
  }

  sortSubscriptions(subscriptions: Subscription[]): Subscription[] {
    return subscriptions.sort((a, b) =>
      this.getPrice(a.price) < this.getPrice(b.price) ? 1 : -1
    );
  }

  getPrice(priceString: string): number {
    const onlyPricePattern = /[+-]?\d+(\.\d+)?/g;
    // @ts-ignore
    return +priceString.match(onlyPricePattern).join('');
  }
}
