import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service'; // Import the authentication service
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root', // Angular component selector
  templateUrl: './app.component.html', // Reference to the HTML template
  styleUrls: ['./app.component.scss'], // Reference to the CSS styles
})
export class AppComponent {
  title = 'goodreads-clone'; // Application title
  currentUser: any; // Store current user information

  constructor(private authenticationService: AuthenticationService, private snackBar: MatSnackBar) {
    this.currentUser = this.authenticationService.getCurrentUser(); // Get current user on initialization
  }

  logout() { // Function to handle logout
    this.authenticationService.logout(); // Call logout from the authentication service
    this.currentUser = null;
     // Clear the current user information
     this.snackBar.open('Logout Successfully!', 'Close', {
      duration: 5000, // Popup stays for 5 seconds
      verticalPosition: 'top', // Can be 'top' or 'bottom'
      horizontalPosition: 'center', // Can be 'start', 'center', 'end', 'left', or 'right'
    });
  }
}
