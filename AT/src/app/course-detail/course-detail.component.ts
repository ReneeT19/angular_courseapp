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
  private sub: any;
  data:any;

  @Input() course: Course;
  constructor(private courseService: CourseService, private route: ActivatedRoute) { }

  ngOnInit(): void {

      this.route.paramMap.subscribe((params: ParamMap) => {
        this.id = +params.get('id');
      });
    }
      // this.name = this.route.snapshot.queryParamMap.get("name")
      // this.route.queryParamMap.subscribe(queryParams => {
      //   this.name = queryParams.get("name")
      // })

}



  //goBack() {
    //return this.router.url.includes("/dashboard");
  //}
