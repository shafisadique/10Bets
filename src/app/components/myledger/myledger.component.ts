import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SessionBetLedger, sessionBetsLedgerData } from '../../shared/bets.interface';
import { MyledgerPopupComponent } from './myledger-popup/myledger-popup.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TopHeaderComponent } from '../../header/top-header/top-header.component';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { BottomNavComponent } from '../../header/bottom-nav/bottom-nav.component';

@Component({
  selector: 'app-myledger',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './myledger.component.html',
  styleUrl: './myledger.component.css'
})
export class MyledgerComponent {
  sessionBets:SessionBetLedger[]=sessionBetsLedgerData;
  constructor(private modalService:NgbModal){}
  getSessionLedgerData(data:any){
    const modalRef = this.modalService.open(MyledgerPopupComponent, {
      windowClass: 'custom-modal-content',
      centered: true
    });
    (<MyledgerPopupComponent> modalRef.componentInstance).data = {data}
  }
  goBack(){
    window.history.back()
  }
}
