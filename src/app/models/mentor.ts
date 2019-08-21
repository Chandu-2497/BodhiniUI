import { Time } from '@angular/common';

export class Mentor{
    id: number;
    userid: number;
    technologies: any[];
    from: Time;
    to: Time;
    // days: any[];
    facilities: string[];
    yearsOfExperience: number;
    phone: string;
    city: string;
    address: string;
}