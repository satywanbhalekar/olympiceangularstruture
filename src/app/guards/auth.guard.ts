import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ServiceService } from '../Service/service.service';

export const AuthGuard: CanActivateFn = (route, state) => {
  const AuthGuard = inject(ServiceService);
  const router = inject(Router);

  if (AuthGuard.isAuthenticated()) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
