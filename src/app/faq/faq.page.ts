import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-faq',
    templateUrl: './faq.page.html',
    styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {
    private list = {
        faq: {
            title: [{
                title: 'Programs/Registration'
            }, {
                title: 'League vs. Skills'
            }, {
                title: 'Tution'
            }, {
                title: 'Scheduling/Timing/Locations/Holiday Schedule'
            }, {
                title: 'Policies:Make Up/Injury,Illness/Rain/Cancellation',

            }, {
                title: 'Parent and Student Eceptations'
            }],
        }
    };

    constructor(private navCtrl: NavController) {
    }

    ngOnInit() {
    }

    hoop(data): void {
        this.navCtrl.navigateForward('/faqdescription');
    }

}
