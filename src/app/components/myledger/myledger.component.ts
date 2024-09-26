import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SessionBetLedger, sessionBetsLedgerData } from '../../shared/bets.interface';
import { MyledgerPopupComponent } from './myledger-popup/myledger-popup.component';
import { NgbModal, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { TopHeaderComponent } from '../../header/top-header/top-header.component';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { BottomNavComponent } from '../../header/bottom-nav/bottom-nav.component';
import { SportService } from '../../services/sport.service';

@Component({
  selector: 'app-myledger',
  standalone: true,
  imports: [CommonModule,NgbPaginationModule],
  templateUrl: './myledger.component.html',
  styleUrl: './myledger.component.css'
})
export class MyledgerComponent implements OnInit{
  sessionBets:any[]=[];
  currentPage: number = 1; // Pagination starts at 1
  pageSize: number = 20; // Set the desired number of items per page
  totalCount: number = 0; // Total number of items across all pages
  constructor(private modalService:NgbModal,private sportService:SportService){}

  ngOnInit(): void {
    this.loadLedgerData(this.currentPage);
  }

  getSessionLedgerData(data:any){
    const modalRef = this.modalService.open(MyledgerPopupComponent, {
      windowClass: 'custom-modal-content',
      centered: true
    });
    (<MyledgerPopupComponent> modalRef.componentInstance).data = {data}
  }

  goBack(){
    window.history.back();
  }
  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadLedgerData(page);
  }

  loadLedgerData(page: number): void {
    this.sportService.myLedger(page - 1).subscribe({
      next: (res:any) => {
        this.sessionBets = res.list;
        this.pageSize = 20; // Assuming you have a fixed page size
        this.totalCount = res.totalElements; // Set the total number of elements
        this.currentPage = res.currentPage + 1; // Ensure the current page is correctly set
      }
    });
  }
}
