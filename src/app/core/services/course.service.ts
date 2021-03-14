import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Course } from "src/app/core/models/course";
import { HttpParamsQueryString } from "../models/httpClient";
import { HttpClientService } from "./http-client.service";

@Injectable({ providedIn: "root" })
export class CourseService {
    constructor(private httpClient: HttpClientService) 
    {
    }
    GetAll = ():Observable<Course[]> => this.httpClient.Get<Course[]>("courses");
    GetById = (id: number):Observable<Course> => this.httpClient.Get<Course>(`courses/${id}`);
    GetBy = (course:Course):Observable<Course[]> => {
        let params:HttpParamsQueryString[] = [];
        params.push({name: "code", value:course.code});
        params.push({name: "description", value:course.description});
        params.push({name: "name", value:course.name});
        params.push({name: "releaseDate", value:course.releaseDate});
        params.push({name: "rating", value:course.rating?.toString()});
        params.push({name: "duration", value:course.duration?.toString()});
        params.push({name: "price", value:course.price?.toString()});
        return this.httpClient.Get<Course[]>(`courses`, params);
    }
    Update = (course: Course):Observable<Course> => this.httpClient.Update<Course, Course>(`courses/${course.id}`, course);
    Add = (course: Course):Observable<Course> => this.httpClient.Add<Course, Course>(`courses`, course);
    Delete = (id: number):Observable<void> => this.httpClient.Delete(`courses/${id}`);
}