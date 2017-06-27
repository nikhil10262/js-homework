import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { User } from '../user';
import { FormControl, FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../user.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [UserService]
})
export class UserDetailComponent implements OnInit {
  public userInfo: FormGroup;
  user: User;


  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute, public fb: FormBuilder) { }

  ngOnInit() {
    this.userInfo = new FormGroup({
      email: new FormControl(null, Validators.required),
      first_name: new FormControl(null, Validators.required),
      last_name: new FormControl(null, Validators.required)
    });

    if (this.route.snapshot.params['id']) {
      let id = +this.route.snapshot.params['id'];
      this.user = this.userService.getUser(id);
    } else {
      this.user = this.userService.getUser(null);
    }
  }

  createUser(model: User, isValid: Boolean) {
    if (isValid) {
      console.log(String(Object.keys(this.userService.getUsers()).length + 1))
      this.user.buyer_id = String(Object.keys(this.userService.getUsers()).length + 1);
      this.user.id = String(Object.keys(this.userService.getUsers()).length + 1);
      this.user.email = model.email;
      this.user.first_name = model.first_name;
      this.user.last_name = model.last_name;

      this.userService.createUser(this.user);
      this.userInfo = this.fb.group({
        email: [''],
        first_name: [''],
        last_name: ['']
      });
      this.router.navigateByUrl('/');
    }
  }

}
