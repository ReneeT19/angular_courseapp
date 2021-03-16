import { CourseService } from './../course.service';
import { COURSES } from './../mock-courses';
import { Component, OnInit } from '@angular/core';
import { Course } from '../course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

 // course = "Angular";
 // course: Course = {
 //     id:1,
 //     name:"Angular",
 // }
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
