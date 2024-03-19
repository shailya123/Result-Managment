import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherviewComponent } from './teacherview/teacherview.component';
import { StudentviewComponent } from './studentview/studentview.component';
import { LoginComponent } from './login/login.component';
import { AddrecordComponent } from './addrecord/addrecord.component';
import { ResultviewComponent} from './resultview/resultview.component';
const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'teacher', component:TeacherviewComponent},
  {path:'student', component:StudentviewComponent},
  {path:'addrecord', component:AddrecordComponent},
  {path:'addrecord/:id', component:AddrecordComponent},
  {path:'result', component:ResultviewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
