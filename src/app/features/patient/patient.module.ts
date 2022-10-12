import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent } from './patient.component';
import { PatientRoutingModule } from './patient-routing.module';
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { PairingPatientPipe } from './pipes/pairing.pipe';

@NgModule({
  declarations: [
    PatientComponent,
    PairingPatientPipe
  ],
  imports: [
    PatientRoutingModule,
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  providers: [PairingPatientPipe]
})
export class PatientModule { }
