import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-aboutus',
    templateUrl: './aboutus.page.html',
    styleUrls: ['./aboutus.page.scss'],
})
export class AboutusPage implements OnInit {

    private object = {

        heading: 'What Makes HoopSphere Special?',
        subheading: 'You are not simply in a class at HoopSphere. You are embarking on a basketball journey!',
        details: {
            StudentFirst: 'HoopSphere doesn\'t involve a one size fits all approach. We believe in doing whats best for each student based on their needs, learning style, current skill set, and strengths and weaknesses',
            ComprehensiveProgram: 'An extremely detailed year round comprehensive program to address every skill and every stage of development for all ages and levels.',
            ExperiencedCoaches: 'Our team is accustomed to working with all ages and levels. They are not only caring and passionate, but also outstanding teachers and communicators.',
            Inspiration: 'Our love for the game rubs off on our students. We are proud to say that thousands of Bay Area youth play basketball because of their motivating experiences as HoopSphere students.',
            PersonalityDevelopment: 'Confidence, resilience, communication skills, teamwork, leadership, discipline, and hard work are all main byproducts of what we teach. These traits all impact our students in everything they will do.',
            OurMission: 'We want to pass on lessons that will not only bring achievements on the basketball court but will contribute to success in all aspects of life.'
        }
    };


    constructor() {
    }

    ngOnInit() {
    }

}
