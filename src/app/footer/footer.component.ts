import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  naviagte: any =  [
    {
      title : "Home",
      url   : "",
      icon  : "home-outline"
    },
    {
      title : "My Account",
      url   : "/my_account",
      icon  : "person-outline"
    },
    {
      title : "Categories",
      url   : "/category",
      icon  : "menu-outline"
    },
    {
      title : "My Orders",
      url   : "/my_order",
      icon  : "bicycle-outline"
    },
    {
      title : "Cart",
      url   : "/cart",
      icon  : "cart-outline"
    },
  ]
  constructor(private router: Router) { }

  ngOnInit() { console.log(this.naviagte  )}
}
