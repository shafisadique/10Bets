import { Component, OnInit } from '@angular/core';
import { TopHeaderComponent } from '../header/top-header/top-header.component';
import { BottomNavComponent } from '../header/bottom-nav/bottom-nav.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SportService } from '../services/sport.service';
import { Profile } from './profile.interface';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [TopHeaderComponent,BottomNavComponent,SidebarComponent,CommonModule,FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  rateDifference: number = 5; // Default rate difference
  constructor(private sportService:SportService,private toastrService:ToastrService){}
  profileData!:Profile;

  ngOnInit(): void {
    this.getProfileData()
  }
  // Method to handle rate update
  updateRateDifference() {
    console.log(`Rate Difference updated to: ${this.rateDifference}`);
    // Perform the update action here, e.g., send to a server
  }
  getProfileData(){
    this.sportService.getProfileData().subscribe({
      next:(res:any)=>{
        console.log(res)
        this.profileData = res;
      },
      error:(e:Error)=>{
        this.toastrService.error('Error','Something has Wrong')
      }
    })
  }
  getRateOptions(): { key: string, value: number }[] {
    // Convert reteDiffList into an array of objects with key-value pairs
    return Object.keys(this.profileData.reteDiffList).map(rate => ({
      key: rate,
      value: this.profileData.reteDiffList[rate]
    }));
  }
}
