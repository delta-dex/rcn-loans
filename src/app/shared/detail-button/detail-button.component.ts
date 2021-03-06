import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Loan } from './../../models/loan.model';

import { MaterialModule } from './../../material/material.module';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-detail-button',
  templateUrl: './detail-button.component.html',
  styleUrls: ['./detail-button.component.scss']
})
export class DetailButtonComponent {
  @Input() loan: Loan;
  constructor(private router: Router, public snackBar: MatSnackBar) { }

  handleDetail() {
    this.router.navigate(['/loan/', this.loan.id]).then(nav => {
      console.log(nav); // true if navigation is successful
    }, err => {
      console.log(err); // when there's an error
    });
  }
  /*
  openSnackBar(message: any, action: any) {
    this.snackBar.open(this.loan.amount , this.loan.borrowerShort, {
      duration: 4000,
    });
  }
  */
}


