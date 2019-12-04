import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ContainerComponent } from './components/container/container.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';


const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:ContainerComponent},
  {path:'categories', component:CategoriesComponent},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
