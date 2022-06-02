import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent} from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Error404Component } from './components/error404/error404.component';
import { AboutComponent } from './components/about/about.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  { path:"home", component:HomeComponent },
  { path:"cart", component:CartComponent },
  { path:"login", component:LoginComponent },
  { path:"navbar", component:NavbarComponent },
  { path:"register", component:RegisterComponent },
  { path:"details/:id", component:ProductDetailsComponent },
  {path:"about", component:AboutComponent},
  { path: '**', pathMatch: 'full', 
        component:Error404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
