import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { map, Observable, switchMap } from 'rxjs';
import { PatientService } from 'src/app/features/patient/patient.service';
import * as patientActions from '../actions/patient.action';

@Injectable({ providedIn: 'root' })
export class patientEffect {

    getPatientsData$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(patientActions.getPatientsData),
        switchMap(() => {
            return this.patientService.getPatientsData().pipe(
                map(data => patientActions.getPatientsDataSuccess({ patients: data }))
            )
        })
    ));

    savePatient$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(patientActions.savePatient),
        switchMap((data) => {
            return this.patientService.savePatient(data.id, data.patient).pipe(
                map(data => patientActions.savePatientSuccess({ id: data.id, patient: data }))
            )
        })
    ));

    unpairPatient$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(patientActions.unpairPatient),
        switchMap((data) => {
            return this.patientService.savePatient(data.id, data.patient).pipe(
                map(data => patientActions.savePatientSuccess({ id: data.id, patient: data }))
            )
        })
    ));

    constructor(private actions$: Actions, private patientService: PatientService) { }
}