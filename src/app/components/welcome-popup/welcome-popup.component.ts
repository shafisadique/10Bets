import { Component, Input, OnInit } from '@angular/core';
import { SportService } from '../../services/sport.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-welcome-popup',
  standalone: true,
  imports: [],
  templateUrl: './welcome-popup.component.html',
  styleUrl: './welcome-popup.component.css'
})
export class WelcomePopupComponent implements OnInit{
@Input() data:any;
message:any;
constructor(private sportService:SportService,
  public modal: NgbActiveModal,
){}
ngOnInit(): void {
  this.sportService.getNotificationMsg().subscribe({
    next:(res:any)=>{
      this.message = res.msg;
      }
  })
}	

dismiss() {
  this.modal.dismiss('Cross click');
}
}
