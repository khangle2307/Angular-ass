import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductMangagerComponent } from './pages/product-mangager/product-mangager.component';
import { ProductUpdateComponent } from './pages/product-update/product-update.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'products',
    component: ProductMangagerComponent,
    canActivate: [AuthGuard],
  },
  { path: 'detailProduct/:id', component: ProductDetailComponent },
  { path: 'products/add', component: ProductAddComponent },
  { path: 'products/edit/:id', component: ProductUpdateComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
