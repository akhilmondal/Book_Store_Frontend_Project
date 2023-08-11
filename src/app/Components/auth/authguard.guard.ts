import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthguardService } from 'src/app/Services/auth/authguard.service';

export const authguardGuard: CanActivateFn = (route, state) => {
  let router = inject(Router);
  let authService = inject(AuthguardService);
  if (!authService.gettoken()) {
    router.navigateByUrl('/login');
  }
  return authService.gettoken();
};
