import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  selectedValue = 'Chennai';
  isSearchbar = false
  @Input() isSidebarActive: boolean = false; // Default to false

  options = [
    { value: 'Chennai', viewValue: 'Chennai' },
    { value: 'Madurai', viewValue: 'Madurai' }
  ];

  constructor() { }

  ngOnInit(): void { 
  }

  openSeachbar(val:any){
    this.isSearchbar = (val == 'open') ? true : false
  }
}
