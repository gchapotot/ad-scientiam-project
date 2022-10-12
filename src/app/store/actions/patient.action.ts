import {createAction, props} from '@ngrx/store';
import { Patient } from 'src/app/features/patient/model/Patient.model';

export const getPatientsData = createAction(
    '[Patient] Get Patients Data'
);

export const getPatientsDataSuccess = createAction(
    '[Patient] Get Patients Data Success',
    props<{patients: Patient[]}>()
);

export const unpairPatient = createAction(
    '[Patient] Unpair Patient',
    props<{id: number}>()
);