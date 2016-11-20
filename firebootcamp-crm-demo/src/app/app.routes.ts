
import { CompanyListComponent } from './company/company-list/company-list.component';
import { CompanyEditComponent } from './company/company-edit/company-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: '', redirectTo: 'company/list', pathMatch: 'full' },
    { path: 'company/list', component: CompanyListComponent },
    { path: 'company/edit/:id', component: CompanyEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouterModule { }










// import { CompanyListComponent } from './company/company-list/company-list.component';
// import { CompanyEditComponent } from './company/company-edit/company-edit.component';
// import { RouterModule, Routes } from '@angular/router';
// import { NgModule } from '@angular/core';

// const routes: Routes = [
//     { path: '', redirectTo: 'home', pathMatch: 'full' },
//     { path: 'home', loadChildren: 'app/home/home.module#HomeModule' },
//     { path: 'company/list', component: CompanyListComponent },
//     { path: 'company/edit/:id', component: CompanyEditComponent }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
// export class AppRouterModule { }

