import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user_list = [];
  err_msg: string;
  selected_user = {
    first_name: '',
    last_name: ''
  };
  amount = 0;

  constructor(public _userService: UserService) { }

  ngOnInit(): void {
    this._userService.getUserList().subscribe((res) => {
      this.user_list = res.data;
      console.log(this.user_list);
    }, (err) => {
      this.err_msg = 'Error While loading User LIst.';
    })
  }

  getDetails(id: number): void {
    this._userService.getUserDetails(id).subscribe((res) => {
      this.selected_user = res.data;
      console.log(this.selected_user);
      this.amount = this.getAmountPaid(id);
    }, (err) => {
      this.err_msg = 'Error while loading User Details';
    });
  }

  getAmountPaid(id: number): number {
    return id * 1000;
  }

}
