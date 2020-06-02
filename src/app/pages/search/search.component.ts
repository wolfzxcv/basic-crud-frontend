import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  username: string;
  user: any;
  constructor(private service: UserService) {}

  ngOnInit(): void {}
  findByUsername() {
    let res = this.service.getByUserName(this.username);
    res.subscribe((data) => (this.user = data));
  }
}
