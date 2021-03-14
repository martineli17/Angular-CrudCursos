import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './core/components/nav-bar/error/not-found.component';
import { CourseModule } from './course/course.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CourseModule,
    CoreModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '', pathMatch: 'full'},
      {path: '**', component: NotFoundComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
