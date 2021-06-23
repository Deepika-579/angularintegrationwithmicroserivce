import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { HelloComponent } from './hello/hello.component';
import { DemoComponent } from './demo/demo.component';
import { AccountComponent } from './account/account.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"view1",component:AccountComponent},
  {path:"demo",component:DemoComponent},
  {path:"hello",component:HelloComponent},

  {path:"delete",component:DeleteEmployeeComponent},
  {path:"update",component:UpdateEmployeeComponent},
  {path:"view",component:ViewEmployeeComponent},
  {path:"create",component:CreateEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
