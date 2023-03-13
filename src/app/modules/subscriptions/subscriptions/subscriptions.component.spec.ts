import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SubscriptionsComponent } from './subscriptions.component';
import { DnsSystemService } from '../../../shared/services/dns-system.service';
import {
  createComponentFactory,
  mockProvider,
  Spectator,
} from '@ngneat/spectator';
import { of } from 'rxjs';
import { MockComponent } from 'ng-mocks';
import { DataTableComponent } from '../../../shared/ui-components/data-table/data-table.component';

const mockResponse = [
  {
    optionTitle: 'title',
    description: 'description',
    price: '£108.00(inc. VAT)Per Year',
  },
  {
    optionTitle: 'title',
    description: 'description',
    price: '£174.00(inc. VAT)Per Year',
  },
];

describe('SubscriptionsComponent', () => {
  let spectator: Spectator<SubscriptionsComponent>;
  const createComponent = createComponentFactory({
    component: SubscriptionsComponent,
    declarations: [MockComponent(DataTableComponent)],
    providers: [
      mockProvider(DnsSystemService, {
        getSubscriptions: () => of(mockResponse),
      }),
    ],
    imports: [HttpClientTestingModule],
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should render the full subscription list', () => {
    spectator.component.getSubscriptions().subscribe((subscriptions) => {
      expect(subscriptions?.length).toBe(2);
    });
  });
});
