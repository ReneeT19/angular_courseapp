import { Course } from './../course';
import { Component, OnInit } from '@angular/core';
import { CourseService } from './../course.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  selectedCourse: Course;
  courses: Course[];

  constructor(private CourseService: CourseService) { }

  ngOnInit(): void {
    this.getCourses();
  }
  onSelect(course: Course): void{
    this.selectedCourse = course;
  }
  getCourses(): void{
    this.CourseService.getCourses().subscribe(courses => this.courses = courses);
  }
}
