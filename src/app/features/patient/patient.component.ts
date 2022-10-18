import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store';
import { getPatientsData, unpairPatient } from 'src/app/store/actions/patient.action';
import { selectPatients$ } from 'src/app/store/selectors/patient.selector';
import { Patient } from './model/Patient.model';
import { PatientFolderComponent } from './patient-folder/patient-folder.component';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  public displayedColumns: string[] = ['lastName', 'firstName', 'createdAt', 'gender', 'actionsColumn'];

  public patients$: Observable<Patient[] | null> = this.store.pipe(select(selectPatients$));

  public searchTerm: string = '';

  constructor(private store: Store<AppState>, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.store.dispatch(getPatientsData());
  }

  public onSeeFolder(patient: Patient): void {
    this.dialog.open(PatientFolderComponent, {
      width: '80%',
      data: {
        patient: patient
      }
    });
  }

  public onUnpairPatient(patient: Patient): void {
    const newPatient = JSON.parse(JSON.stringify(patient));
    newPatient.pairing = false;
    this.store.dispatch(unpairPatient(patient.id, newPatient));
  }
}
