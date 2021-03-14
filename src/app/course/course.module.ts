import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { StarModule } from "../shared/components/star/star.module";
import { PipeModule } from "../shared/pipes/pipe.component";
import { CourseAddComponent } from "./formulario/course-add.component";
import { CourseListComponent } from "./listagem/course-list.component";

@NgModule({
    declarations:[
        CourseListComponent,
        CourseAddComponent,
    ],
    imports:[
        CommonModule,
        FormsModule,
        StarModule,
        PipeModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            {path: 'courses', component: CourseListComponent},
            {path: 'course/new', component: CourseAddComponent},
            {path: 'course/:id', component: CourseAddComponent},
        ]),
    ]
})
export class CourseModule{

}