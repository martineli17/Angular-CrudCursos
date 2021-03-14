import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavBarComponent } from "./components/nav-bar/navbar/nav-bar.component";

@NgModule({
    declarations:[
        NavBarComponent,
    ],
    imports:[
        RouterModule,
    ],
    exports:[
        NavBarComponent,
    ]
})
export class CoreModule{

}