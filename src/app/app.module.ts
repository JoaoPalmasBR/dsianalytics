import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms'
import { ChartsModule } from 'ng2-charts';
import { DataService } from './data.service';


const rotas: Routes = [
  {path: 'dashboard', component: DashboardComponent,},
  {path: 'login', component: LoginComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartsModule,
    RouterModule.forRoot(rotas)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }