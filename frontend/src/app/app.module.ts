import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import { MatSlider,MatSliderModule } from '@angular/material/slider';
import {FormsModule} from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatAccordion} from '@angular/material/expansion';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router, RouterModule } from '@angular/router';
import {MatRadioModule} from '@angular/material/radio';
import {MatTooltipModule} from '@angular/material/tooltip';



import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './Student/home/home.component';
import { CoursesComponent } from './Student/courses/courses.component';
import { GradesComponent } from './Student/grades/grades.component';
import { StudentNavComponent } from './Student/student-nav/student-nav.component';
import { MycourseComponent } from './Student/mycourse/mycourse.component';
import { ExamsComponent } from './Student/exams/exams.component';
import { StudentProfileComponent } from './Student/student-profile/student-profile.component';
import { StudentExampagesComponent } from './Student/exams/student-exampages/student-exampages.component';
import { NavbarComponent } from './admin/navbar/navbar.component';
import { MainComponent } from './admin/main/main.component';
import { AddcourseComponent } from './admin/addcourse/addcourse.component';
import { AddstudentComponent } from './admin/addstudent/addstudent.component';
import { AddtrainerComponent } from './admin/addtrainer/addtrainer.component';
import { StudentsComponent } from './admin/students/students.component';
import { TrainersComponent } from './admin/trainers/trainers.component';
import { EditcourseComponent } from './admin/editcourse/editcourse.component';
import { EditstudentComponent } from './admin/editstudent/editstudent.component';
import { EdittrainerComponent } from './admin/edittrainer/edittrainer.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { CourselistComponent } from './admin/courselist/courselist.component';
import { ProfileComponent } from './admin/profile/profile.component';
import { ChangepassComponent } from './admin/changepass/changepass.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CoursesComponent,
    GradesComponent,
    StudentNavComponent,
    MycourseComponent,
    ExamsComponent,
    StudentProfileComponent,
    StudentExampagesComponent,
    NavbarComponent,
    MainComponent,
    AddcourseComponent,
    AddstudentComponent,
    AddtrainerComponent,
    StudentsComponent,
    TrainersComponent,
    EditcourseComponent,
    EditstudentComponent,
    EdittrainerComponent,
    AdminhomeComponent,
    CourselistComponent,
    ProfileComponent,
    ChangepassComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatCardModule,
    MatSliderModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    RouterModule,
    MatRadioModule,
    FormsModule,
    MatTooltipModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent], 
})

export class AppModule { }
