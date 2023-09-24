import { Injectable } from '@angular/core';
import { MatSnackBar, } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private snack: MatSnackBar) {}
  openSnackBar(message: string, action: string) {
    // if (action === 'error') {
    //   this.snackBar.error(message, '', {
    //     horizontalPosition: 'center',
    //     verticalPosition: 'top',
    //     duration: 2000,
    //     panelClass: ['green-snackbar'],
    //   });
    // } else {
    //   this.snackBar.error(message, '', {
    //     horizontalPosition: 'center',
    //     verticalPosition: 'top',
    //     duration: 2000,
    //     panelClass: ['green-snackbar'],
    //   });
    // }
  }
}
