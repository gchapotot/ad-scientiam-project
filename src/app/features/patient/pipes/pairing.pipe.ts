import { Pipe, PipeTransform } from "@angular/core";
import { Patient } from "../model/Patient.model";

@Pipe({name: 'pairingPipe'})
export class PairingPatientPipe implements PipeTransform {
    
    transform(data: Patient[] | null): Patient[]{
        return data ? data.filter((value) => value.pairing) : [];
    }
}