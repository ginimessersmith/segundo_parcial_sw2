import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { HttpClient } from '@angular/common/http';
import { PerfilPageComponent } from './pages/perfil-page/perfil-page.component';
import { DepartmentsPageComponent } from './pages/departments-page/departments-page.component';
import { ManagementsPageComponent } from './pages/managements-page/managements-page.component';
import { ProfessionsPageComponent } from './pages/professions-page/professions-page.component';
import { VacanciesPageComponent } from './pages/vacancies-page/vacancies-page.component';
import { PeriodsPageComponent } from './pages/periods-page/periods-page.component';
import { ContractTypesPageComponent } from './pages/contract-types-page/contract-types-page.component';
import { BranchesPageComponent } from './pages/branches-page/branches-page.component';
import { DepartmentsBranchesPageComponent } from './pages/departments-branches-page/departments-branches-page.component';
import { PositionsPageComponent } from './pages/positions-page/positions-page.component';
import { ApplicantsPageComponent } from './pages/applicants-page/applicants-page.component';
import { ApplicationsPageComponent } from './pages/applications-page/applications-page.component';
import { EmployeesPageComponent } from './pages/employees-page/employees-page.component';
import { AttendancesPageComponent } from './pages/attendances-page/attendances-page.component';
import { BonusesPageComponent } from './pages/bonuses-page/bonuses-page.component';
import { ContractPageComponent } from './pages/contract-page/contract-page.component';
import { DeductionsPageComponent } from './pages/deductions-page/deductions-page.component';
import { PayrollsPageComponent } from './pages/payrolls-page/payrolls-page.component';
import { SettlementsPageComponent } from './pages/settlements-page/settlements-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutPageComponent,
    children:[
      {path:'perfil',component:PerfilPageComponent},
      {path:'profession',component:ProfessionsPageComponent},
      {path:'management',component:ManagementsPageComponent},
      {path:'period',component:PeriodsPageComponent},
      {path:'contract-type',component:ContractTypesPageComponent},
      {path:'branch',component:BranchesPageComponent},
      {path:'department',component:DepartmentsPageComponent},
      {path:'department-branch',component:DepartmentsBranchesPageComponent},
      {path:'position',component:PositionsPageComponent},
      {path:'vacancies',component:VacanciesPageComponent},
      {path:'applicant',component:ApplicantsPageComponent},
      {path:'application',component:ApplicationsPageComponent},
      {path:'employee',component:EmployeesPageComponent},
      {path:'attendance',component:AttendancesPageComponent},
      {path:'bonus',component:BonusesPageComponent},
      {path:'contract',component:ContractPageComponent},
      {path:'deduction',component:DeductionsPageComponent},
      {path:'payroll',component:PayrollsPageComponent},
      {path:'settlement',component:SettlementsPageComponent},
      {path:'user',component:UserPageComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
