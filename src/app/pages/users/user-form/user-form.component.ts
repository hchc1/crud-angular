import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;
  users: Array<User> = [];
  userId: any = '';

  constructor(private fb: FormBuilder,
    private userService: UserService,
    private activRoute: ActivatedRoute,
    private router: Router) {
    this.userForm = this.fb.group({
      id: 0,
      firstName: '',
      lastName: '',
      age: 0,
      job: '',
      image_url: '',
    })
  }

  ngOnInit(): void {
    this.activRoute.paramMap.subscribe(params => {
      this.userId = params.get('id');
      if (this.userId !== null) {
        this.userService.getUser(this.userId).subscribe(response => {
          this.userForm.patchValue({
            id: response[0].id,
            firstName: response[0].firstName,
            lastName: response[0].lastName,
            age: response[0].age,
            job: response[0].job,
            image_url: response[0].image_url,
          })
        })
      }
    })

    this.getUsers();
  }
  
  getUsers() {
    this.userService.getUsers().subscribe(response => {
      this.users = response;
    })
  }

  sendUser() {
    this.userForm.get('id')?.patchValue(this.users.length + 1);
    this.userService.postUser(this.userForm.value).subscribe(response =>{
      console.log(`User ${response.firstName} successfully written`)
    }, (err) => {
      console.log(err);
    }, () => {
      this.router.navigate(['/']);
    })
  }

  updateUser() {
    this.userService.updateUser(this.userId, this.userForm.value).subscribe(response => {
    }, (err) => {
      console.log(err);
    }, () => {
      this.router.navigate(['/']);
    })
  }

  actionBTN() {
    if (this.userId !== null) {
      this.updateUser()
    } else {
      this.sendUser()
    }
  } 

}
