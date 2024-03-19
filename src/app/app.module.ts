import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PijamaComponent } from './component/pijama/pijama.component';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './component/post/post.component';
@NgModule({
  declarations: [
    AppComponent,
    PijamaComponent,
    PostComponent
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
