import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { patientReducer } from './store/reducers/patient.reducer';
import { EffectsModule } from '@ngrx/effects';
import { patientEffect } from './store/effects/patient.effect';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({
      'patient': patientReducer
    }),
    EffectsModule.forRoot([
      patientEffect
    ]),
    StoreDevtoolsModule.instrument({
      name: 'Ad Scientiam Project App'
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
