import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../service/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '../service/alert.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted: boolean = false;
  loading: boolean = false;
  returnUrl: string;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['',[Validators.required,Validators.email]],
      password: ['',Validators.required]
    })

    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

  }

  get f() { return this.loginForm.controls;}

  submit(){

    this.submitted = true;
    if(this.loginForm.invalid){
      return;
    }

    this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate(['/dashboard']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });


  }

}
