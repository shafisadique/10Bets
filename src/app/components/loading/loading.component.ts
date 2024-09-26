import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [],
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit,OnDestroy{
  isLoading: boolean = false;
  private subscription: Subscription;
  constructor(private loadingService: LoadingService) {
    this.subscription = this.loadingService.isLoading$.subscribe(
      (isLoading:any) => {
        this.isLoading = isLoading;
      }
    );
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
