import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcourseComponent } from './admin/addcourse/addcourse.component';
import { AddstudentComponent } from './admin/addstudent/addstudent.component';
import { AddtrainerComponent } from './admin/addtrainer/addtrainer.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { ChangepassComponent } from './admin/changepass/changepass.component';
import { CourselistComponent } from './admin/courselist/courselist.component';
import { EditcourseComponent } from './admin/editcourse/editcourse.component';
import { EditstudentComponent } from './admin/editstudent/editstudent.component';
import { EdittrainerComponent } from './admin/edittrainer/edittrainer.component';
import { MainComponent } from './admin/main/main.component';
import { ProfileComponent } from './admin/profile/profile.component';
import { StudentsComponent } from './admin/students/students.component';
import { TrainersComponent } from './admin/trainers/trainers.component';
import { LoginComponent } from './login/login.component';
import { CoursesComponent } from './Student/courses/courses.component';
import { ExamsComponent } from './Student/exams/exams.component';
import { StudentExampagesComponent } from './Student/exams/student-exampages/student-exampages.component';
import { GradesComponent } from './Student/grades/grades.component';
import { HomeComponent } from './Student/home/home.component';
import { MycourseComponent } from './Student/mycourse/mycourse.component';
import { StudentProfileComponent } from './Student/student-profile/student-profile.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'student-home', component:HomeComponent,
     children:[
        {path:'',component:CoursesComponent},
        {path:'student-viewcourse',component:CoursesComponent},
        {path:'my-course',component:MycourseComponent},
        {path:'grades',component:GradesComponent},
        {path:'exams',component:ExamsComponent},
        {path:'student-profile',component:StudentProfileComponent},
        // {path:'student-exampage',component:StudentExampagesComponent}
        
     ]
  },
  // {path:'student-exampage',component:StudentExampagesComponent}
  {path:'admin',component:AdminhomeComponent,
  children:[{path:'home',component:MainComponent},
  {path:'courses',component:CourselistComponent},
  {path:'students',component:StudentsComponent},
  {path:'trainers',component:TrainersComponent},
  {path:'addcourse',component:AddcourseComponent},
  {path:'addstudent',component:AddstudentComponent},
  {path:'addtrainer',component:AddtrainerComponent},
  {path:'editcourse',component:EditcourseComponent},
  {path:'editstudent',component:EditstudentComponent},
  {path:'edittrainer',component:EdittrainerComponent},
  {path:'admin-profile',component:ProfileComponent,
  children:[{path:'changepass',component:ChangepassComponent}]},
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
