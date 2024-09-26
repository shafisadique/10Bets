import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SportService } from '../../services/sport.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-header',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './top-header.component.html',
  styleUrl: './top-header.component.css'
})
export class TopHeaderComponent implements OnInit{
  getNotification:any;
  coin:any;
  constructor(private sportService:SportService){
  }
  ngOnInit(): void {
    this.sportService.balance$.subscribe(newBalance => {
      this.coin = newBalance;
    })
    this.sportService.getNotificationMsg().subscribe({
      next:(res)=>{
        this.getNotification = res;
      }
    });
    this.sportService.getIndexMsg().subscribe({
      next:(res)=>{
        this.coin = res.coin;
      }
    })
  }

}
