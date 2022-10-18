import { createReducer, on, Action } from "@ngrx/store";
import { Patient } from "src/app/features/patient/model/Patient.model";
import * as patientActions from '../actions/patient.action';

export interface patientState {
    patients: Patient[] | null;
}

const initialState: patientState = {
    patients: null
};

export const reducer = createReducer(initialState,
    on(patientActions.getPatientsData, () => {
        return initialState;
    }),
    on(patientActions.getPatientsDataSuccess, (state, { patients }) => {
        return { ...state, patients };
    }),
    on(patientActions.unpairPatient, (state) => {
        return { ...state };
    }),
    on(patientActions.savePatient, (state) => {
        return { ...state };
    }),
    on(patientActions.savePatientSuccess, (state, { id, patient }) => {
        console.log(id, patient)
        const newState = JSON.parse(JSON.stringify(state));
        const index = newState.patients.findIndex((patient: Patient) => patient.id === id);
        newState.patients[index] = patient;
        return newState;
    })
);
export function patientReducer(state: patientState | undefined, action: Action): patientState {
    return reducer(state, action);
}