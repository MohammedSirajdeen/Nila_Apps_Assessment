import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isActive = true;
  isMenuhighlight = 1
  @Output() toggle = new EventEmitter<boolean>();
  menuItems = [
    { id:1,icon: 'dashboard', label: 'Dashboard' },
    { id:2,icon: 'settings', label: 'Settings' },
    { id:3,icon: 'info', label: 'About' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.isActive = !this.isActive;
    this.toggle.emit(!this.isActive);
  }

  menuClick(val:any){
    this.isMenuhighlight = val
  }
}
