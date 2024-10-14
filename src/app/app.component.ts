import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Nila_Apps_Assessment';

  isSidebarActive = false;

  onToggleSidebar(isActive: boolean) {
    this.isSidebarActive = isActive; // Update the state based on emitted value
  }
  
}
