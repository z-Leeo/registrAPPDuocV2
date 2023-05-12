import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(public ngFireAuth: AngularFireAuth) {

 
   }

   registerUser(email:string,password:string){
    return this.ngFireAuth.signInWithEmailAndPassword(email, password);

   }

   loginUser(email:string){

   }

   resetPassword(){}
   
}
