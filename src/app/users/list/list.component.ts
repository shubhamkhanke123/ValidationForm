import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomainService } from 'src/app/services/domain.services';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent  implements OnInit {

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
      next : (res: { api: string; }) => {
        this.url = res.api
        this.getList()
      }
    })
  }

  userList! : any
  getList(){
    console.log(this.url)
    this.http.get(this.url).subscribe({
      next:(res: any) => {
        this.userList = res
      }
    })
  }

  logout(){
    this.router.navigate(['login'])
  }
}
