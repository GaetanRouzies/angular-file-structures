import { HttpInterceptorFn } from '@angular/common/http';

export const interceptor2Interceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
