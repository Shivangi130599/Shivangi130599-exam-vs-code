import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  username:string;

  ngOnInit(): void {
    this.username=sessionStorage.getItem('loggedInUsername');
  }

}
