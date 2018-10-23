import {Component, OnInit} from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
// import {AngularFirestore} from 'angularfire2/firestore';
// import { AngularFirestore } from '@angular/fire/firestore';
// import * as firebase from 'firebase/app';
// import {Observable} from 'rxjs/index';
// import {map} from 'rxjs/internal/operators';


@Component({
    selector: 'app-programs',
    templateUrl: './programs.page.html',
    styleUrls: ['./programs.page.scss'],
})
export class ProgramsPage implements OnInit {

    // public programs;
     public programlist: any;

    public program = {
        title: {
            title1: 'The HoopSphere League',
            title2: 'AAU (Travel Team)',
            title3: 'Skills Training Classes'
        },
        subTitle: {
            subTitle1: 'Be a part of a structured and focused team in an exciting and enjoyable game atmosphere',
            subtitle2: '',
            subtitle3: 'Learn the proper techniques from professional coaches'
        },
        points: [
            {
                point1: 'Players of all ages and levels (beginners to advanced) are placed in the appropriate division based on grade level and playing experience.',
                point2: 'Scores/Standings/Playoffs/Awards.',
                point3: 'Focused Team Practices to learn essential game concepts.',
                point4: 'Experienced and motivating coaches provide guidance and points of learning during game play and team practices.',
                point5: 'Provides equal opportunity to all players to improve confidence in game play.',
                point6: 'Players will learn the importance of teamwork, communication, and effort, while also elevating their game play.',

            },
            {
                point1: 'By Invitation Only for HoopSphere\'s top performers of each age group.'
            },

            {
                point1: 'Classes are full of energy and jam-packed with dribbling, shooting, passing, footwork, defense, and more.',
                point2: 'Students will be assigned to their groups based on their age and skill level.',
                point3: 'Build the essential fundamentals under a motivating and experienced coach.',
                point4: 'Acquire new skills and moves while taking existing skills to a higher level.',
                point5: 'Year round in depth comprehensive skills curriculum ensures that students will continually elevate their overall game and confidence throughout the year.',
                point6: 'Classes with more seasoned players will learn elite and advanced techniques, while beginner classes will learn more basic fundamentals.',
                point7: 'Skills coach will provide weekly assignments to guide students on how to practice outside of class.',
            }]
    };


    constructor(private fireStore: AngularFireDatabase) {
       this.programlist = fireStore.list<any>('/programs');
       console.log(this.programlist);
        // this.programlist = this.programs.snapshotChanges().pipe(
        //     map(data => {
        //         console.log(data);
        //         return data.map(res => {
        //             console.log(res);
        //         });
        //     })
        // );
        // console.log(this.programs);
    }

    ngOnInit() {
    }

}
