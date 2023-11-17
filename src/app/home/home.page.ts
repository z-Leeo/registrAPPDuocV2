import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';
<<<<<<< HEAD
=======
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
>>>>>>> 53d8cb89900e7821a0b77217f94080abd19b8168

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  email :any
  code:any
  constructor(private authService:AuthServiceService,private router: Router,
<<<<<<< HEAD
              ) {}
=======
              private barcodeScanner: BarcodeScanner) {}
>>>>>>> 53d8cb89900e7821a0b77217f94080abd19b8168
  ngOnInit(): void {
   
    this.authService.getProfile().then((user) =>{
        this.email = user?.email
        console.log(user);
        
    })
  }

<<<<<<< HEAD

=======
  scan(){
    this.barcodeScanner.scan().then(barcodeData=>{
      this.code = barcodeData.text;
      console.log('Barcode data', this.code);
    }).catch(err =>{
      console.log('Error',err)
    });
  }
>>>>>>> 53d8cb89900e7821a0b77217f94080abd19b8168

 signOut(){

  this.authService.signOut().then(() =>{
    this.router.navigate(['/landing'])
  })
 }



}
