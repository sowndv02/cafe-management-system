import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig, } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private snackbar: MatSnackBar) {}
  openSnackBar(message: string, action: string) {
    if (action === 'error') {
      this.snackbar.open(message, '', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 2000,
        panelClass: ['green-snackbar'],
      });
    } else {
      this.snackbar.open(message, '', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 2000,
        panelClass: ['green-snackbar'],
      });
    }
  }
}
