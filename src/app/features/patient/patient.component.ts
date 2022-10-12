import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store';
import { getPatientsData } from 'src/app/store/actions/patient.action';
import { selectPatients$ } from 'src/app/store/selectors/patient.selector';
import { Patient } from './model/Patient.model';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  public displayedColumns: string[] = ['lastName', 'firstName', 'createdAt', 'gender', 'actionsColumn'];

  public patients$: Observable<Patient[] | null> = this.store.pipe(select(selectPatients$));

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(getPatientsData());
  }

}
