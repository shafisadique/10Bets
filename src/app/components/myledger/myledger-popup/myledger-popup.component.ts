import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-myledger-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './myledger-popup.component.html',
  styleUrl: './myledger-popup.component.css'
})
export class MyledgerPopupComponent implements OnInit{
  @Input() data: any;
  showSessionDetails: boolean = false; // To control the session details table display
  constructor(private activeModal:NgbActiveModal){}
  ngOnInit(): void {
    console.log(this.data);
  }

  // Toggle the display of session details
  toggleSessionDetails() {
    this.showSessionDetails = true;
  }

  // To return to the main content
  backToMainView() {
    this.showSessionDetails = false;
  }

  closeModal() {
    this.activeModal.close();
  }
}
