import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-locations',
    templateUrl: './locations.page.html',
    styleUrls: ['./locations.page.scss'],
})
export class LocationsPage implements OnInit {
    location = {
        address: {
            address1: {
                name: 'New Life Church Gymnasium',
                place: '4130 Technology Place, Fremont, CA 94538'
            },
            address2: {
                name: 'Warm Springs Elementary Gymnasium',
                place: '47370 Warm Springs Blvd, Fremont, CA 94539'
            },
            address3: {
                name: 'James Logan High School Main Gym/Side Gym',
                place: '1800 H Street, Union City, CA 94587'
            },
            address4: {
                name: 'Hopkins Junior High School, outdoor courts',
                place: '600 Driscoll Road, Fremont, CA 94539'
            }
        }
    };

    constructor() {
    }

    ngOnInit() {
    }

}
