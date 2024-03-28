import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PijamaComponent } from './component/pijama/pijama.component';
import { PostComponent } from './component/post/post.component';
import { PutComponent } from './component/put/put.component';

const routes: Routes = [
  { path:'home', component:PijamaComponent },
  { path:'enviardatos', component:PostComponent},
  { path:'actualizar', component:PutComponent },
  { path:'', redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
