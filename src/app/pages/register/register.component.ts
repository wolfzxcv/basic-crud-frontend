import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  user: User = new User('', '', 0, '', '', '');
  message: any;

  constructor(private service: UserService) {}

  ngOnInit(): void {}

  handleRegister() {
    let res = this.service.doRegister(this.user);
    res.subscribe((data) => (this.message = data));
  }
}
