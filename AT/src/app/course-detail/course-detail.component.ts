import { COURSES } from './../mock-courses';
import { CourseService } from './../course.service';
import { Course } from './../course';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from "rxjs/operators";

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  id: number;
  name: string;
  COURSES: [];
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
      
      this.route.paramMap.subscribe((params: ParamMap) => {
        this.id = +params.get('id');
      });
      this.name = COURSES[this.id-1].name;
    }
}



  //goBack() {
    //return this.router.url.includes("/dashboard");
  //}
