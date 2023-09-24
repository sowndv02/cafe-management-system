import { TestBed } from '@angular/core/testing';

import { TokenInterceporInterceptor } from './token-intercepor.interceptor';

describe('TokenInterceporInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TokenInterceporInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TokenInterceporInterceptor = TestBed.inject(TokenInterceporInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
