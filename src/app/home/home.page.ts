import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  email :any
  code:any
  constructor(private authService:AuthServiceService,private router: Router,
              private barcodeScanner: BarcodeScanner) {}
  ngOnInit(): void {
   
    this.authService.getProfile().then((user) =>{
        this.email = user?.email
        console.log(user);
        
    })
  }

  scan(){
    this.barcodeScanner.scan().then(barcodeData=>{
      this.code = barcodeData.text;
      console.log('Barcode data', this.code);
    }).catch(err =>{
      console.log('Error',err)
    });
  }

 signOut(){

  this.authService.signOut().then(() =>{
    this.router.navigate(['/landing'])
  })
 }



}
