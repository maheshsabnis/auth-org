import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {tap} from 'rxjs/operators';
import * as fromAuth from '@auth-org/auth-store';
``
@Injectable()
export class AppEffects {

    constructor(private actions$: Actions,
                private router: Router) {}

    loginSuccess$ = createEffect(() => this.actions$.pipe(
        ofType(fromAuth.loginSuccess),
        tap((action) => {
            this.router.navigate(['/employeeslist/employees']);
        })
    ), { dispatch: false });

}
