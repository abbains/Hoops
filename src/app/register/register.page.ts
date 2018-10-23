import {Component, OnInit} from '@angular/core';
import {Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
    private register: FormGroup;


    constructor(private formBuilder: FormBuilder) {

    }

    ngOnInit() {
        this.register = this.formBuilder.group({
            age: ['', Validators.required],
            phone: ['',
                Validators.compose([
                    Validators.required,
                    Validators.pattern('^[0-9]{3}-[0-9]{3}-[0-9]{4}')
                ])],
            skill: ['', Validators.required],
            male: [''],
            female: [''],
            email: ['', Validators.compose([
                Validators.required,
                Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])],
            name: ['',
                Validators.compose([
                    Validators.required,
                    Validators.minLength(5)
                ])]
        });
    }

    registerForm(): void {
        console.log(this.register.value);
    }

}
