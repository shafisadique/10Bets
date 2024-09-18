import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../shared/auth.service';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const cokiesService =inject(AuthService)
  const myToken = cokiesService.getToken();
  if(req.url.includes('login')){
    return next(req);
  }
  const token = `Bearer ${myToken}`;
  const cloneReq =req.clone({
    setHeaders :{
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJDMTA2NyIsImF1ZCI6IjIiLCJzY29wZXMiOlt7ImF1dGhvcml0eSI6IjIifV0sImlzcyI6IklTU1VFUiIsImlhdCI6MTcxNTE2NzI2MSwiZXhwIjoxNzE2MDMxMjYxfQ.oFpRBZQJWaGGzLdByehcVuJTta3oZ3RLb_kzL6XJ9uc`
    }
  })
  return next(cloneReq);
};
