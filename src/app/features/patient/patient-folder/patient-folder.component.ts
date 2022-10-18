import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { savePatient } from 'src/app/store/actions/patient.action';
import { Patient } from '../model/Patient.model';

@Component({
  selector: 'app-patient-folder',
  templateUrl: './patient-folder.component.html',
  styleUrls: ['./patient-folder.component.scss']
})
export class PatientFolderComponent implements OnInit {

  public patient: Patient | null = null;

  public patientForm: FormGroup | null = null;

  public sepTypes: string[] = [`primaryProgressive`, `secondaryProgressive`, `relapsingRemitting`];

  public submitted: boolean = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { patient: Patient }, public dialogRef: MatDialogRef<PatientFolderComponent>, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.patient = this.data.patient;
    this.patientForm = this.createFormGroup();
  }

  public createFormGroup(): FormGroup {
    let form = new FormGroup({
      lastName: new FormControl(this.patient && this.patient.lastName ? this.patient.lastName : null, Validators.required),
      firstName: new FormControl(this.patient && this.patient.firstName ? this.patient.firstName : null, Validators.required),
      SEPType: new FormControl(this.patient && this.patient.medicalInfo.SEPType ? this.patient.medicalInfo.SEPType : null, Validators.required),
      scoreEDSS: new FormControl(this.patient && this.patient.medicalInfo.scoreEDSS ? parseFloat(this.patient.medicalInfo.scoreEDSS.replace(',', '.')).toFixed(1) : null, [Validators.required, Validators.min(0), Validators.max(2), Validators.pattern('[+-]?([0-9]*[.])?[0-9]+')]),
      gender: new FormControl(this.patient && this.patient.gender ? this.patient.gender : null, Validators.required),
      firstDegree: new FormControl(this.patient && this.patient.medicalInfo.factors.firstDegree ? this.patient.medicalInfo.factors.firstDegree : null),
      secondDegree: new FormControl(this.patient && this.patient.medicalInfo.factors.secondDegree ? this.patient.medicalInfo.factors.secondDegree : null),
      noDegree: new FormControl(this.patient && this.patient.medicalInfo.factors.noDegree ? this.patient.medicalInfo.factors.noDegree : null),
      notSure: new FormControl(this.patient && this.patient.medicalInfo.factors.notSure ? this.patient.medicalInfo.factors.notSure : null),
      walkingStickAid: new FormControl(this.patient && this.patient.medicalInfo.walkingStickAid ? this.patient.medicalInfo.walkingStickAid : false),
      crutchesAid: new FormControl(this.patient && this.patient.medicalInfo.crutchesAid ? this.patient.medicalInfo.crutchesAid : false),
      walkWithCaregiverAid: new FormControl(this.patient && this.patient.medicalInfo.walkWithCaregiverAid ? this.patient.medicalInfo.walkWithCaregiverAid : false)
    });
    return form;
  }

  public get f(): { [key: string]: AbstractControl; } {
    return this.patientForm!.controls;
  }

  /*
  Set factors rules
  */
  public checkCheckboxRules(factor: string): void {
    switch (factor) {
      case 'noDegree':
        this.patientForm?.get('firstDegree')?.setValue(false);
        this.patientForm?.get('secondDegree')?.setValue(false);
        this.patientForm?.get('notSure')?.setValue(false);
        break;
      case 'notSure':
        this.patientForm?.get('firstDegree')?.setValue(false);
        this.patientForm?.get('secondDegree')?.setValue(false);
        this.patientForm?.get('noDegree')?.setValue(false);
        break;
      default:
        this.patientForm?.get('noDegree')?.setValue(false);
        this.patientForm?.get('notSure')?.setValue(false);
    }
  }

  public onClickImage(walkingImage: string): void {
    this.patientForm?.get(walkingImage)?.setValue(!this.patientForm?.get(walkingImage)!.value);
  }

  public onValidate(): void {
    this.submitted = true;
    if (this.patientForm!.invalid) {
      return;
    }

    const newPatient = JSON.parse(JSON.stringify(this.patient));
    newPatient.lastName = this.patientForm?.value.lastName;
    newPatient.firstName = this.patientForm?.value.firstName;
    newPatient.medicalInfo.SEPType = this.patientForm?.value.SEPType;
    newPatient.medicalInfo.scoreEDSS = this.patientForm?.value.scoreEDSS.toString().replace('.', ',');
    newPatient.gender = this.patientForm?.value.gender;
    newPatient.medicalInfo.factors.firstDegree = this.patientForm?.value.firstDegree;
    newPatient.medicalInfo.factors.secondDegree = this.patientForm?.value.secondDegree;
    newPatient.medicalInfo.factors.noDegree = this.patientForm?.value.noDegree;
    newPatient.medicalInfo.factors.notSure = this.patientForm?.value.notSure;
    newPatient.medicalInfo.walkingStickAid = this.patientForm?.value.walkingStickAid;
    newPatient.medicalInfo.crutchesAid = this.patientForm?.value.crutchesAid;
    newPatient.medicalInfo.walkWithCaregiverAid = this.patientForm?.value.walkWithCaregiverAid;

    this.store.dispatch(savePatient(this.patient!.id, newPatient));
    this.onCloseFolder();
  }

  public onCloseFolder(): void {
    this.dialogRef.close();
  }

}
