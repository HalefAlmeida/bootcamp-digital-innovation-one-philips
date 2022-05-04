import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'dio-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  users: Array<User> = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  /**
   * Obtem dados da API
   */
  getUsers() {
    this.userService.readAll().subscribe((data) => {
      this.users = data;
    });
  }

  deleteUser(user: User) {
    this.userService.delete(user.id).subscribe(
      (response) => {
        console.log('Usuário excluído!');
      },
      (err) => {
        console.log(`ERRO AO EXECUTAR${err}`);
      },
      () => {
        this.getUsers();
      }
    );
  }
}
