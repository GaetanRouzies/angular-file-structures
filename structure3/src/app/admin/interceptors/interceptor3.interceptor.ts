import { HttpInterceptorFn } from '@angular/common/http';

export const interceptor3Interceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
