import { Component } from '@angular/core';
import { TopHeaderComponent } from '../../header/top-header/top-header.component';
import { BottomNavComponent } from '../../header/bottom-nav/bottom-nav.component';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [TopHeaderComponent,BottomNavComponent,SidebarComponent,RouterOutlet,CommonModule],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

}
