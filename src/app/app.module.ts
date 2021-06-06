import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UploadTestComponent } from './upload-test/upload-test.component';
import { AssignTestComponent } from './assign-test/assign-test.component';
import { AttendTestComponent } from './attend-test/attend-test.component';
import { ViewTestComponent } from './view-test/view-test.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { MatTableExampleComponent } from './mat-table-example/mat-table-example.component';
import { MatTableExampleModule } from './mat-table-example/mat-table-example.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    UploadTestComponent,
    AssignTestComponent,
    AttendTestComponent,
    ViewTestComponent,
    ViewUsersComponent,
    MatTableExampleComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatTableExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
