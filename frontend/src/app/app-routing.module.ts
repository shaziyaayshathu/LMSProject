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
import { ShowstudentsComponent } from './admin/showstudents/showstudents.component';
import { ShowtrainersComponent } from './admin/showtrainers/showtrainers.component';
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
import { EvaluateSubmissionComponent } from './trainer/evaluate-submission/evaluate-submission.component';
import { MaterialsUploadComponent } from './trainer/materials-upload/materials-upload.component';
import { SetUpExamsComponent } from './trainer/set-up-exams/set-up-exams.component';
import { TrainerHomeComponent } from './trainer/trainer-home/trainer-home.component';
import { TrainerMainComponent } from './trainer/trainer-main/trainer-main.component';
import { ViewFeedbackComponent } from './trainer/view-feedback/view-feedback.component';
import { ViewSubmissionsComponent } from './trainer/view-submissions/view-submissions.component';
import { ViewUploadsComponent } from './trainer/view-uploads/view-uploads.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'', component:LoginComponent},
  {path:'student-home', component:HomeComponent,
     children:[
        {path:'',component:CoursesComponent},
        {path:'student-viewcourse',component:CoursesComponent},
        {path:'my-course',component:MycourseComponent},
        {path:'grades',component:GradesComponent},
        {path:'exams',component:ExamsComponent},
        {path:'student-profile',component:StudentProfileComponent},
        {path:'student-exampage',component:StudentExampagesComponent}
        
     ]
  },
  {path:'admin',component:AdminhomeComponent,
  children:[{path:'',component:MainComponent},
      {path:'home',component:MainComponent},
      {path:'courses',component:CourselistComponent},
      {path:'students',component:StudentsComponent},
      {path:'trainers',component:TrainersComponent},
      {path:'addcourse',component:AddcourseComponent},
      {path:'addstudent',component:AddstudentComponent},
      {path:'addtrainer',component:AddtrainerComponent},
      {path:'editcourse/:id',component:EditcourseComponent},
      {path:'editstudent/:id',component:EditstudentComponent},
      {path:'edittrainer/:id',component:EdittrainerComponent},
      {path:'showstudents/:courseID',component:ShowstudentsComponent},
      {path:'showtrainers/:courseID',component:ShowtrainersComponent},
      {path:'admin-profile',component:ProfileComponent,
          children:[{path:'changepass',component:ChangepassComponent}]},
  ]},

  {path:'trainer-home',component:TrainerHomeComponent,
  children:[{path:'',component:TrainerMainComponent},
      {path:'hometrainer',component:TrainerMainComponent},
      {path:'trainer-uploads',component:ViewUploadsComponent},
      {path:'exams-setup',component:SetUpExamsComponent},
      {path:'upload-materials',component:MaterialsUploadComponent},
      {path:'view-submissions',component:ViewSubmissionsComponent},
      {path:'student-feedback',component:ViewFeedbackComponent},
      {path:'evaluate-submission',component:EvaluateSubmissionComponent}
      
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
