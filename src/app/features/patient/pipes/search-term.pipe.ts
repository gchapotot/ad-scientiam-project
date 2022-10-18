import { Pipe, PipeTransform } from "@angular/core";
import { Patient } from "../model/Patient.model";

/*
Pipe for patient list search bar
Input: Patient array and a string term
Output: Filtered Patient array
*/
@Pipe({ name: 'searchTermPipe' })
export class SearchTermPipe implements PipeTransform {

    transform(data: Patient[] | null, searchTerm: string): Patient[] {
        let newArr: Patient[] = [];
        data?.map((patient) => {
            patient.firstName.toUpperCase().includes(searchTerm.toUpperCase()) || patient.lastName.toUpperCase().includes(searchTerm.toUpperCase()) ? newArr.push(patient) : null;
        });
        return newArr;
    }
}