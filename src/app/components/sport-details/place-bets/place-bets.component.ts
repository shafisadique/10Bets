import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-place-bets',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './place-bets.component.html',
  styleUrl: './place-bets.component.css'
})
export class PlaceBetsComponent {
  @Input() data: any; // The data passed from the parent component
  buttonAmount = [500, 1000, 2000, 3000, 5000, 10000, 20000, 30000, 50000];
  amount: any;
  betForm!: FormGroup;
  isLoading: boolean = false;
  selectedAmount!: number;
  countDown: number = 6;
  private countdownInterval: any;
  errorMessage: string = '';

  constructor(
    public modal: NgbActiveModal,
    // private amountBetService: PlaceBetPositionService,
    // private toastr: ToastrService,
    private formBuilder: FormBuilder,
    // private headerService: HeaderService, // Inject BalanceService
    // private router:Router
  ) {}

  ngOnInit(): void {
    this.betForm = this.formBuilder.group({
      amount: ['', [Validators.required]], // Add other validators as needed
      match_code: [this.data.match_code],
      mode: [this.data.mode],
      rate: [this.data.rate],
      run: [this.data.run],
      sid: [this.data.sid],
      team: [this.data.team],
      type: [this.data.type]
    });
    this.startCountdown();
  }

  selectAmount(amount: number) {
    this.selectedAmount = amount;
    this.betForm.patchValue({
      amount: amount
    });
  }

  dismiss() {
    this.modal.dismiss('Cross click');
  }

  validateAmount(event: any): void {
    const value = event.target.value;
    if (value === '') {
      this.errorMessage = 'Amount is required';
    } else if (value < 0) {
      this.errorMessage = 'Amount cannot be negative';
    } else {
      this.errorMessage = '';
    }
    this.amount = value ? Number(value) : null;
  }

  startCountdown() {
    this.countdownInterval = setInterval(() => {
      // Decrease countdown by 1
      this.countDown -= 1;

      // Check if countdown has reached 0
      if (this.countDown === 0) {
        clearInterval(this.countdownInterval); // Clear interval to stop the countdown
        this.dismiss(); // Dismiss the modal
      }
    }, 1000); // Decrease every second
  }

  onSubmit() {
    this.isLoading = true;
  //  return  console.log(this.betForm.value.mode);
    // if (this.errorMessage == '' && this.betForm.valid) {
    //   if (this.betForm.value.mode === 'K' || this.betForm.value.mode === 'L') {
    //     this.amountBetService.placeBetPositionForK(this.betForm.value).subscribe({
    //       next: (res:any) => {
    //         console.log(res)
    //         if (res.status == false) {
    //           this.toastr.error('Bet Not Placed', res.msg, {
    //             timeOut: 3000,
    //           });
    //           this.modal.dismiss('Cross click');
    //         } else {
    //           this.toastr.success('Update successfully', res.msg);
    //           this.updateBalance();
    //           this.modal.dismiss('Cross click');
    //         }
    //       },
    //       error: (e:any) => {
    //         console.log(e);
    //         this.toastr.error('Error', e.message, {
    //           timeOut: 3000,
    //         });
    //         this.modal.dismiss('Cross click');
    //       }
    //     });
    //   } else {
    //     // this.amountBetService.placeBetPosition(this.betForm.value).subscribe({
    //     //   next: (res) => {
    //     //     if (res.status == false) {
    //     //       this.toastr.error('Bet Not Placed', res.msg, {
    //     //         timeOut: 3000,
    //     //       });
    //     //       this.modal.dismiss('Cross click');
    //     //     } else {
    //     //       this.toastr.success('Update successfully', res.msg);
    //     //       this.router
    //     //       this.modal.dismiss('Cross click');
    //     //     }
    //     //   },
    //     //   error: (e) => {
    //     //     console.log(e);
    //     //     this.toastr.error('Error', e.message, {
    //     //       timeOut: 3000,
    //     //     });
    //     //     this.modal.dismiss('Cross click');
    //     //   }
    //     // });
    //   }
    // }
    console.log(this.selectedAmount);
  }

  updateBalance() {
    // Fetch the new balance from the server
    // this.headerService.getDataOfUser().subscribe({
    //   next: (userData) => {
    //     this.headerService.updateBalance(userData.coin); // Update balance in the service
    //   },
    //   error: (error) => {
    //     console.error('Failed to update balance:', error);
    //   }
    // });
  }

  ngOnDestroy(): void {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }
}