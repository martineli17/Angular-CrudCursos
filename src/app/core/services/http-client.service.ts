import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpParamsQueryString } from "../models/httpClient";

@Injectable({ providedIn: "root" })
export class HttpClientService{
    private urlBase:string = "http://localhost:3000/";
    constructor(private client:HttpClient){

    }
    Get<TReturn>(completeUrl:string, params:HttpParamsQueryString[] = null):Observable<TReturn> {
        return this.client.get<TReturn>(`${this.urlBase}${completeUrl}${HttpParamsQueryString.GetQueryString(params)}`);
    }

    Delete(completeUrl:string):Observable<any> {
        return this.client.delete<any>(`${this.urlBase}${completeUrl}`);
    }

    Add<TReturn, TData>(completeUrl:string, data:TData):Observable<TReturn> {
        return this.client.post<TReturn>(`${this.urlBase}${completeUrl}`, data);
    }

    Update<TReturn, TData>(completeUrl:string, data:TData):Observable<TReturn> {
        return this.client.put<TReturn>(`${this.urlBase}${completeUrl}`, data);
    }
}