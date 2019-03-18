import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainwComponent } from './mainw/mainw.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {HttpClientModule} from "@angular/common/http";
import {CustomerService} from "./customer.service";
import {MatTableModule} from '@angular/material/table';
import {FormsModule} from "@angular/forms";
import {AgmCoreModule} from "@agm/core";
import {AgmDirectionModule} from "agm-direction";
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
// import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { CloudinaryModule, CloudinaryConfiguration } from '@cloudinary/angular-5.x';
// import { Cloudinary } from 'cloudinary-core';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    MainwComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule,
    MatTableModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyD_W5R3Qs6myPZQyIFLs8M7hmbLiVP08xE',
    }),
    AgmDirectionModule,
    MatBottomSheetModule,
    // Cloudinary,
    // CloudinaryConfiguration,
    CloudinaryModule


  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
