import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ApiService } from './Api/api.service';
import { StoreModule } from '@ngrx/store';
import { postReducer } from './Store/Reducers/postReducer';
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from './Store/Effects/postEffects';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(ApiService),
    ReactiveFormsModule,
    StoreModule.forRoot({ posts: postReducer }),
    EffectsModule.forRoot([PostEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
