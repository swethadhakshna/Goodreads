import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  username = '';
  email = '';
  password = '';
  errorMessage = '';

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  register() {
    this.authenticationService.register(this.username, this.password, this.email).subscribe(
      () => {
        this.router.navigate(['/']);
      },
      (error) => {
        this.errorMessage = error.message;
      }
    );
  }
}

