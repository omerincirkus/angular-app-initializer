import { from, Observable } from 'rxjs';
import { UserService } from '../service/user.service';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

export function initializeAppFactory(userService: UserService, router: Router): () => Observable<any> {
  return () => userService.loadData().pipe(
    catchError(() => from(router.navigate(['/error'])))
  );
}
