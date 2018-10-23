import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {first} from 'rxjs/internal/operators';
import {CoachDescriptionService} from '../coach-description.service';

@Component({
  selector: 'app-coach-description',
  templateUrl: './coach-description.page.html',
  styleUrls: ['./coach-description.page.scss'],
})
export class CoachDescriptionPage implements OnInit {
     descript: any;
  constructor( private coachDescription: CoachDescriptionService) { }

  ngOnInit() {
      // this.Route.params.pipe(first()).subscribe( params => console.log(params));
      this.descript = this.coachDescription.returnDescription();
      // console.log(this.descript);
  }

}
