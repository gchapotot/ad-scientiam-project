import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { catchError, map, Observable, of, switchMap } from 'rxjs';
import { PatientService } from 'src/app/features/patient/patient.service';
import * as patientActions from '../actions/patient.action';

@Injectable({ providedIn: 'root' })
export class patientEffect {
    @Effect()
    getPatientsData$: Observable<Action> = this.actions$.pipe(
        ofType(patientActions.getPatientsData),
        switchMap(() => {
            return this.patientService.getPatientsData().pipe(
                map(data => patientActions.getPatientsDataSuccess({ patients: data }))
            )
        })
    );
    constructor(private actions$: Actions, private patientService: PatientService) { }
}