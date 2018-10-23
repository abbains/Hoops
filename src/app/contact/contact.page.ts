import {Component, OnInit} from '@angular/core';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.page.html',
    styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

    object = {
        image: 'https://static.wixstatic.com/media/ca7d68_a7cf1cc9e4f0439cb629dde04570a9b3~mv2.png/v1/fill/w_188,h_188,al_c,q_80,usm_0.66_1.00_0.01/ca7d68_a7cf1cc9e4f0439cb629dde04570a9b3~mv2.webp',
        call: 'Call or Text: (510) 585-8008',
        email: 'Email: training@hoopsphere.com',
        question: 'Questions? Visit our FAQ for quick answers'
    };

    private contact: FormGroup;

    constructor(private formBuilder: FormBuilder) {

    }

    ngOnInit() {
        this.contact = this.formBuilder.group({
            parentfullname: ['',
                Validators.compose([
                    Validators.required,
                    Validators.minLength(5)
                ])
            ],
            email: ['',
                Validators.compose([
                    Validators.required,
                    Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
                ])],
            studentFullname: ['',
                Validators.compose([
                    Validators.required,
                    Validators.minLength(5)
                ])],
            number: ['',
                Validators.compose([
                    Validators.required,
                    // Validators.max(15),
                    // Validators.min(10),
                    Validators.pattern('^[0-9]{3}-[0-9]{3}-[0-9]{4}')
                ])],
            age: ['',
                Validators.required
            ],
            message: ['',
                Validators.required
            ]
        });
    }

    contactForm() {
        console.log(this.contact.value);
    }

}
