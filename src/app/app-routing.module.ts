import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponentComponent } from './product-list-component/product-list-component.component';
import { ProductaddComponent } from './productadd/productadd.component';

const routes: Routes = [
  {
    path:'product', component: ProductListComponentComponent
  },
  {
    path:'add', component: ProductaddComponent
  },
  {path:'',redirectTo:'/product',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 