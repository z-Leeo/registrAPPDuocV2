import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AuthServiceService } from './auth-service.service';
import { environment } from 'src/environments/environment';
<<<<<<< HEAD
=======
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
>>>>>>> 53d8cb89900e7821a0b77217f94080abd19b8168
@NgModule({
  declarations: [AppComponent ,],
  imports: [BrowserModule,
            AngularFireAuthModule,
            AngularFireModule,
            AngularFireModule.initializeApp(environment.firebaseConfig),

    IonicModule.forRoot(), AppRoutingModule],
<<<<<<< HEAD
  providers: [ { provide: RouteReuseStrategy, useClass: IonicRouteStrategy,  }],
=======
  providers: [ BarcodeScanner,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy,  }],
>>>>>>> 53d8cb89900e7821a0b77217f94080abd19b8168
  bootstrap: [AppComponent],
})
export class AppModule {}
