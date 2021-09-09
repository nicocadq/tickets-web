import { httpClient } from '../httpClient';

class TicketsService {
  static index() {
    return httpClient({ endpoint: '/tickets', method: 'GET' });
  }
}

export default TicketsService;
