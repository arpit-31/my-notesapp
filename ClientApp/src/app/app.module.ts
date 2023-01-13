import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';
import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { MatCardModule } from '@angular/material/card';
import {  MatInputModule } from '@angular/material/input';
import { NoteserviceService } from './noteservice.service';
import { SearchFilterPipe } from "./filter-search.pipe";

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    CreateComponent,
    HomeComponent,
    SearchFilterPipe
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NoopAnimationsModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule
  
  
   ],
 
  providers: [{provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
              , NoteserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
