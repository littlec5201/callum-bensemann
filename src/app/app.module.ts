import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FooterModule } from './components/footer/footer.module';
import { HeaderModule } from './components/header/header.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: AppComponent }
];

@NgModule({
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FooterModule,
    HeaderModule,
    RouterModule.forRoot(routes)
  ],
  providers: []
})
export class AppModule { }
