import {createAction, props} from '@ngrx/store';

export const getPatientsData = createAction(
    '[Patient] Get Patients Data'
);

export const getPatientsDataSuccess = createAction(
    '[Patient] Get Patients Data Success',
    props<{patients: any[]}>()
);