import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomainService } from 'src/app/services/domain.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-user-details',
  templateUrl: './get-user-details.component.html',
  styleUrls: ['./get-user-details.component.scss']
})
export class GetUserDetailsComponent implements OnInit {

  constructor(
    private http : HttpClient,
    private domain : DomainService,
    private router :Router
  ){}

  ngOnInit(): void {
    this.getApi()
  }

  url! : string
  getApi(){
    this.domain.getApi().subscribe({
      next : (res) => {
        this.url = res.api
      }
    })
  }

  submit(){
    let name = (document.getElementById('nameSignIn') as HTMLInputElement).value,
        password = (document.getElementById('passwordSignIn') as HTMLInputElement).value,
        body = {name, password}, result : any
        this.http.get(this.url).subscribe({
          next : (res) => {
            result = res
          },
          complete : () => {
            for(let ele of result){
              this.userExistance = true
                if(ele.name == body.name && ele.password == body.password){
                  this.router.navigate(['users','list'])
                  break;
                }else{
                  this.userExistance = true
                }
            }
          }
        })
  }

  isSignin = true
  register(){
    this.isSignin = !this.isSignin
  }

  registered = 'Register'
  userExistance : boolean = false
  registeredButton = false
  create(){
    let name = (document.getElementById('name') as HTMLInputElement).value,
        email = (document.getElementById('email') as HTMLInputElement).value,
        mobile = (document.getElementById('mobileNumber') as HTMLInputElement).value,
        password = (document.getElementById('password') as HTMLInputElement).value,
        body = {name,email,mobile,password}, result : any
        this.http.get(this.url).subscribe({
          next : (res) => {
            result = res
          },
          complete : () => {
            let doesNotExist = true
            for(let ele of result){
                if(ele.name == body.name && ele.mobile == body.mobile){
                  this.userExistance = true
                  doesNotExist = false
                  break;
                }else{
                  doesNotExist = true
                }
            }
            if(doesNotExist){
              this.userExistance = false
              this.registered = 'Registered! Login'
              this.registeredButton = true
              this.http.post(this.url,body).subscribe()
            }
          }
        })

  }

}
