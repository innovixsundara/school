import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from 'angular-datatables';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddprincipalComponent } from './addprincipal/addprincipal.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { AddteacherComponent } from './addteacher/addteacher.component';
import { AssignteacherComponent } from './assignteacher/assignteacher.component';
import { ClasslistComponent } from './classlist/classlist.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PrincipallistComponent } from './principallist/principallist.component';
import { RegisterComponent } from './register/register.component';
import { StudentattendanceComponent } from './studentattendance/studentattendance.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TeacherlistComponent } from './teacherlist/teacherlist.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'navbaradmin', component: NavbarComponent, },
  { path: 'adminprincipal', component: AddprincipalComponent },
  { path: 'addprincipal', component: AddprincipalComponent },
  { path: 'addstudent', component: AddstudentComponent },
  { path: 'addteacher', component: AddteacherComponent },
  { path: 'assignteacher', component: AssignteacherComponent },
  {
    path: 'classlist', component: ClasslistComponent,
    children: [{ path: 'studentlist', component: StudentlistComponent }]
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'principallist', component: PrincipallistComponent },
  { path: 'studentattendance', component: StudentattendanceComponent },
  { path: 'studentlist', component: StudentlistComponent },
  { path: 'teacherlist', component: TeacherlistComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    AddprincipalComponent,
    AddstudentComponent,
    AddteacherComponent,
    AssignteacherComponent,
    ClasslistComponent,
    DashboardComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    PrincipallistComponent,
    RegisterComponent,
    StudentattendanceComponent,
    StudentlistComponent,
    TeacherlistComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
