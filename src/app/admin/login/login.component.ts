import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  username: string = '';
  password: string = '';

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {}
  
  login() {
    this.loginService.login(this.username, this.password).subscribe(
      (response) => {
        if (response.status) {
          this.loginService.saveToken(response.token);
          return this.router.navigate(['/admin']);
        }
        else {
          alert(response.msg);
          return this.router.navigate(['/admin/login']);
        }
      },
      (error) => {
        alert(error);
        return this.router.navigate(['/admin/login']);
      }
    );
  }
}
