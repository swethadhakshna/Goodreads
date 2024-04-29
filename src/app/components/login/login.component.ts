import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  login() {
    this.authenticationService.login(this.username, this.password).subscribe(
      () => {
        this.snackBar.open('Loged In Successfully!', 'Close', {
          duration: 5000, // Popup stays for 5 seconds
          verticalPosition: 'top', // Can be 'top' or 'bottom'
          horizontalPosition: 'center', // Can be 'start', 'center', 'end', 'left', or 'right'
        });
        this.router.navigate(['/']);
        window.location.reload();
      },
      (error) => {
        this.errorMessage = error.message;
      }
    );
  }
}

