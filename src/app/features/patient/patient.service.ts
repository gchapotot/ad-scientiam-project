import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Patient } from './model/Patient.model';

@Injectable({ providedIn: 'root' })
export class PatientService {

  constructor(private http: HttpClient) { }

  public getPatientsData(): Observable<Patient[]> {
    return this.http.get<any>(`${environment.API_URL}/patients`);
  }

  public savePatient(id: number, data: Patient): Observable<Patient> {
    return this.http.put<any>(`${environment.API_URL}/patients/${id}`, data);
  }
}
