import { Component, OnInit } from '@angular/core'
import { Course } from 'src/app/core/models/course';
import { CourseService } from 'src/app/core/services/course.service';

@Component({
    templateUrl: "./course-list.component.html"
})

export class CourseListComponent implements OnInit {
    _courses: Course[] = [];
    filter: string;
    courses: Course[] = [];
    constructor(private courseService: CourseService) {
    }
    ngOnInit(): void {
        this.GetAll();
    }

    Delete = (id:number) => this.courseService.Delete(id).subscribe({
        next: course => this.GetAll(),
        error: err => alert("Erro ao excluir o curso")
    });

    SearchCourses(){
        if(!this.filter) return;
        this.courseService.GetBy({name: this.filter}).subscribe({
            next: courses => this.courses = courses,
            error: err => alert("Erro ao realizar a pesquisa")
        });
    }

    GetAll = () => {
        this.courseService.GetAll().subscribe({
            next: courses => { 
                this._courses = courses,
                this.courses = this._courses
            },
            error: erro => alert("Erro ao buscar o curso")
        });
    }
}