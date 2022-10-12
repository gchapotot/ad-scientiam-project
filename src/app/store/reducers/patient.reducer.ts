import { createReducer, on, Action, State } from "@ngrx/store";
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
    })
);
export function patientReducer(state: patientState | undefined, action: Action): patientState {
    return reducer(state, action);
}