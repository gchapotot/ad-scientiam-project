import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent } from './patient.component';
import { PatientRoutingModule } from './patient-routing.module';
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PairingPatientPipe } from './pipes/pairing.pipe';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchTermPipe } from './pipes/search-term.pipe';
import { PatientFolderComponent } from './patient-folder/patient-folder.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    PatientComponent,
    PairingPatientPipe,
    SearchTermPipe,
    PatientFolderComponent
  ],
  imports: [
    PatientRoutingModule,
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    NgSelectModule
  ],
  providers: [
    PairingPatientPipe,
    SearchTermPipe
  ]
})
export class PatientModule { }
