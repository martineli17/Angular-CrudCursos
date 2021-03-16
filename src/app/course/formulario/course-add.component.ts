import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, ValidationErrors, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Course } from "src/app/core/models/course";
import { ValidationErrosKeys } from "src/app/core/models/errorsForm";
import { CourseService } from "src/app/core/services/course.service";
import { ValidateErrorsFormService } from "src/app/core/services/validate-errors-form.service";


@Component({
    templateUrl: "./course-add.component.html"
})
export class CourseAddComponent implements OnInit {
    course: Course;
    isEdit: boolean;
    form: FormGroup;
    errors: string;
    private _idCourse: number;
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private validationErrorsForm: ValidateErrorsFormService,
        private courseService: CourseService,
        private formBuilder: FormBuilder) {
        this.course = new Course();
        this.course.releaseDate = Date.now().toString();
        this.isEdit = false;
    }

    ngOnInit() {
        if (!this.GetId())
            this.CreateFormBuilder();
    }

    Add = () => {
        if (this.form.valid)
            this.courseService.Add(this.form.value).subscribe({
                next: course => this.router.navigateByUrl("/courses"),
                error: error => alert("Erro ao adicionar o curso")
            });
        else this.errors = this.validationErrorsForm.GetFormValidationErrors(this.form, this.CreateKeysLabelsErrors());
    }

    Edit = () => {
        const idCourse = this.route.snapshot.params.id;
        this.course = this.form.value;
        this.course.id = idCourse;
        this.courseService.Update(this.form.value).subscribe({
            next: () => this.router.navigateByUrl("/courses"),
            error: err => alert("Erro ao atualizar o curso")
        })
    };

    Delete = () => this.courseService.Delete(this.course.id).subscribe({
        next: course => this.router.navigateByUrl("/courses"),
        error: err => alert("Erro ao excluir o curso")
    });

    GetId = (): boolean => {
        if (!this.route.snapshot.paramMap.has("id")) return false;
        this._idCourse = Number(this.route.snapshot.params.id);
        this.courseService.GetById(this._idCourse).subscribe({
            next: course => {
                this.course = course;
                this.isEdit = true;
                this.CreateFormBuilder();
                return true;
            },
            error: erro => alert("Erro ao buscar o curso")
        });
        return false;
    };

    ClearErrors = () => this.errors = null;

    private CreateFormBuilder = () =>
        this.form = this.formBuilder.group({
            code: [this.course.code, [Validators.required, Validators.minLength(4), Validators.maxLength(7)]],
            name: [this.course.name, [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
            price: [this.course.price, [Validators.required, Validators.min(0)]],
            rating: [this.course.rating, [Validators.min(0), Validators.max(5)]],
            duration: [this.course.duration, [Validators.required, Validators.min(0)]],
            description: [this.course.description, [Validators.required, Validators.minLength(10), Validators.maxLength(250)]],
        });

    private CreateKeysLabelsErrors = (): ValidationErrosKeys[] =>
        [
            { Label: "Código", Name: "code" },
            { Label: "Nome", Name: "name" },
            { Label: "Valor", Name: "price" },
            { Label: "Avaliação", Name: "rating" },
            { Label: "Duração", Name: "duration" },
            { Label: "Descrição", Name: "description" }
        ]
}

