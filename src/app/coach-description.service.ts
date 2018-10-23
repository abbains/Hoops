import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CoachDescriptionService {
    private bucket: any;

    constructor() {
    }

   coachBucket(data): void {
        this.bucket = data;
        // console.log(this.bucket);
    }
    returnDescription() {
        return this.bucket;
    }
}
