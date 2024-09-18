import { Component } from '@angular/core';
import { TopHeaderComponent } from '../header/top-header/top-header.component';
import { BottomNavComponent } from '../header/bottom-nav/bottom-nav.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [TopHeaderComponent,BottomNavComponent,SidebarComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  rateDifference: number = 5; // Default rate difference

  // Method to handle rate update
  updateRateDifference() {
    console.log(`Rate Difference updated to: ${this.rateDifference}`);
    // Perform the update action here, e.g., send to a server
  }
}
