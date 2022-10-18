import { createAction, props } from '@ngrx/store';
import { Patient } from 'src/app/features/patient/model/Patient.model';

export const getPatientsData = createAction(
    '[Patient] Get Patients Data'
);

export const getPatientsDataSuccess = createAction(
    '[Patient] Get Patients Data Success',
    props<{ patients: Patient[] }>()
);

export const unpairPatient = createAction(
    '[Patient] Unpair Patient',
    (id: number, patient: Patient) => ({ id, patient })
);

export const savePatient = createAction(
    '[Patient] Save Patient',
    (id: number, patient: Patient) => ({ id, patient })
);

export const savePatientSuccess = createAction(
    '[Patient] Save Patient Success',
    props<{ id: number, patient: Patient }>()
);