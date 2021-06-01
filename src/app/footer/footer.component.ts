import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() { }
  home() {
    this.router.navigate([''])
  }
  myAccount(){
    this.router.navigate(['/my_account'])
  }
  category(){
    this.router.navigate(['/category'])
  }
  my_order(){
    this.router.navigate(['/my_order'])
  }
  cart(){
    this.router.navigate(['/cart'])
  }
}
