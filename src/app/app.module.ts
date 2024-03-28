import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PijamaComponent } from './component/pijama/pijama.component';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './component/post/post.component';
import { PutComponent } from './component/put/put.component';
@NgModule({
  declarations: [
    AppComponent,
    PijamaComponent,
    PostComponent,
    PutComponent
  ],
  imports: [HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
