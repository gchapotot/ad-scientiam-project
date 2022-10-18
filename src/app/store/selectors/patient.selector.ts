import { createSelector } from '@ngrx/store';
import { AppState } from '../index';

export const selectPatientState$ = (state: AppState) => state.patient;

export const selectPatients$ =
    createSelector(selectPatientState$, (state) => state.patients);