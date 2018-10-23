import {Component, OnInit} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
    public myStyle: object = {};
    public myParams: object = {};
    public width: any = 100;
    public height: any = 100;

    public appPages = [
        {
            title: 'Home',
            url: '/home',
            icon: 'home'
        },
        {
            title: 'Contact',
            url: '/contact',
            icon: 'contact'
        },
        {
            title: 'FAQ',
            url: '/faq',
            icon: 'paper'
        },
        {
            title: 'Locations',
            url: '/locations',
            icon: 'compass'
        },
        {
            title: 'Programs',
            url: '/programs',
            icon: 'book'
        },
        {
            title: 'Register',
            url: '/register',
            icon: 'clipboard'
        },
        {
            title: 'Coaches',
            url: '/coach',
            icon: 'people'
        },
        {
            title: 'Our Videos',
            url: '/videos',
            icon: 'videocam'
        },
        {
            title: 'Gallery',
            url: '/gallery',
            icon: 'images'
        },
        {
            title: 'About Us',
            url: '/aboutus',
            icon: 'contacts'
        }
    ];

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar
    ) {

        this.initializeApp();
    }

    ngOnInit() {
        this.myStyle = {
            'position': 'fixed',
            'width': '100%',
            'height': '100%',
            'z-index': -1,
            'top': 0,
            'left': 0,
            'right': 0,
            'bottom': 0,
        };
        this.myParams = {
            particles: {
                number: {
                    value: 200,
                },
                color: {
                    value: '#5372ff'
                },
                shape: {
                    type: 'triangle',
                },
            }
        };
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
}
