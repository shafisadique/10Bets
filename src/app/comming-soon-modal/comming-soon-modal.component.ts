import { Component, inject } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-comming-soon-modal',
  standalone: true,
  imports: [],
  templateUrl: './comming-soon-modal.component.html',
  styleUrl: './comming-soon-modal.component.css'
})
export class CommingSoonModalComponent {
  private activeModal = inject(NgbActiveModal);
  close(){
    this.activeModal.close();

  }
}
