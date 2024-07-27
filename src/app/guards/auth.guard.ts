import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { tap } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  
  const authServices = inject( AuthService)
  const router = inject(Router)

  return authServices.verifyToken()
  .pipe(
    tap( value =>{
      if(!value){
        
        router.navigateByUrl('/auth/login')
      }
    })
  )
};
