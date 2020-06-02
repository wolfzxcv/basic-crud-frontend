import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss'],
})
export class AllComponent implements OnInit {
  users: any;
  constructor(private service: UserService) {}

  ngOnInit(): void {
    let res = this.service.getAllUser();
    res.subscribe((data) => (this.users = data));
  }

  deleteUser(id: string) {
    let res = this.service.deleteById(id);
    res.subscribe((data) => (this.users = data));
  }
}
