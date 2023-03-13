import { DnsSystemService } from './dns-system.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator';

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

const sortedResponse = [
  {
    optionTitle: 'title',
    description: 'description',
    price: '£174.00(inc. VAT)Per Year',
  },
  {
    optionTitle: 'title',
    description: 'description',
    price: '£108.00(inc. VAT)Per Year',
  },
];

describe('DnsSystemService', () => {
  let spectator: SpectatorService<DnsSystemService>;
  const createService = createServiceFactory({
    service: DnsSystemService,
    imports: [HttpClientTestingModule],
  });
  beforeEach(() => {
    spectator = createService();
  });

  it('should be created', () => {
    expect(spectator.service).toBeTruthy();
  });

  it('should render the highest price first', () => {
    expect(spectator.service.sortSubscriptions(mockResponse)).toEqual(
      sortedResponse
    );
  });
});
